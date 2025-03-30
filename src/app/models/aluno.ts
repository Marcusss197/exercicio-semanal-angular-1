import { Turma } from "./turma";

export class Aluno {
    id!: number;
    nomeAluno!: string;
	cpf!: string;
	telefone!: string;
	cadastroCompleto!: boolean;
	
	turma!: Turma; 
}
