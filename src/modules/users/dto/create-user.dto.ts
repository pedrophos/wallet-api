import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
  @ApiProperty({
    title: "User Name",
    description: "The name of the user",
    example: "John Doe",})
  @IsString()
  name: string;
  @ApiProperty({
    title: "User Email",
    description: "The email of the user",
    example: "john@example.com"})
  @IsEmail()
  email: string;
  @ApiProperty({
    title: "User Password",
    description: "The password of the user",
    example: "securepassword123"})
  @IsString()
  password: string;
}
