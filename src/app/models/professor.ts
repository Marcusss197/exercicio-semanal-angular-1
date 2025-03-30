import { Turma } from "./turma";

export class Professor {
    id!: number;
	nomeProfessor!: string;
	cpf!: string;
	email!: string;
	especialidade!: string;

    turmas!: Turma[]; 
}
