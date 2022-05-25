import { IsEmail, IsNotEmpty, IsNumberString, IsOptional, IsString } from "class-validator";

export class CreateHelloDTO {
   //os @ sao para validar os parametros
   @IsString()
   @IsNotEmpty()
   name: string;

   @IsNumberString()
   age: number;

   @IsString()
   @IsNotEmpty()
   @IsEmail()
   email: string;

   @IsString()
   @IsOptional()
   // indica que eh opcional ? 
   // no caso o endereco eh opcional
   address?: string; 
}