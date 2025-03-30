
import { Curso } from "./curso";
import { Professor } from "./professor";

export class Turma {
    id!: number;
	nomeTurma!: string;
	semestre!: string;
	ano!: string;
	turno!: string;

	curso!: Curso; 
    professor!: Professor[]; 
}
