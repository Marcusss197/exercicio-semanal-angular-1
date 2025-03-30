import { Turma } from "./turma";

export class Curso {
    id!: number;
	nomeCurso!: string;

    turmas!: Turma[]; 
}
