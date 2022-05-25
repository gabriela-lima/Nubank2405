import { IsEmail, IsNotEmpty, IsNumberString, IsOptional, IsString } from "class-validator";

export class UpdateHelloDTO {
   @IsString()
   @IsOptional()
   name: string;

   @IsNumberString()
   @IsOptional()
   age: number;

   @IsString()
   @IsEmail()
   @IsOptional()
   email: string;

   @IsString()
   @IsOptional()
   address?: string; 
}