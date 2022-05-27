//tornar opcional os dados do DTO
// instale o pacote abaixo
// npm intall @nestjs/mapped-types
import { CreateHelloDTO } from "./createHello.dto";
import { OmitType, PartialType } from "@nestjs/mapped-types";

export class UpdateHelloDTO extends PartialType(
   OmitType(CreateHelloDTO, [] as const),
) {}