import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../config/primsma.service';


const mockPrismaService = {
  user: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
    create: jest.fn(),
  },
};

describe('UsersService', () => {
  let service: UsersService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prisma = module.get<PrismaService>(PrismaService);
    jest.clearAllMocks();    
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const dto = { email: 'mary@example.com', name: 'mary', password: '123456' };
    
    prisma.user.create = jest.fn().mockResolvedValue(dto);
    
    expect(await service.create(dto)).toEqual(expect.objectContaining({
      email:'mary@example.com',
       name: 'mary',})); 

     expect(prisma.user.create).toHaveBeenCalledWith({
        data: {
          email: 'mary@example.com',
          name: 'mary',
          password: expect.any(String),
        },
      });
  });


  it('should return all users', async () => {
    const users = [{ id: '1', email: 'john@example.com', name: 'John' }];
    prisma.user.findMany = jest.fn().mockResolvedValue(users);

    expect(await service.findAll()).toEqual(users);
    expect(prisma.user.findMany).toHaveBeenCalled();
  });

it('should find user by email', async () => {
  const user = {
    id: '1',
    name: 'Pedro',
    email: 'pedro@example.com',
    password: 'hashed',
    createdAt: new Date(),
  };

  prisma.user.findUnique = jest.fn().mockResolvedValue(user);

  expect(await service.findByEmail('pedro@example.com')).toEqual(user);
  expect(prisma.user.findUnique).toHaveBeenCalledWith({
    where: { email: 'pedro@example.com' },
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
      createdAt: true,
    },
  });
});
});
