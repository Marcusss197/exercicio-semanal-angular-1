import { Component } from '@angular/core';
import { Turma } from '../../../models/turma';


@Component({
  selector: 'app-turma-list',
  standalone: true,
  imports: [],
  templateUrl: './turma-list.component.html',
  styleUrl: './turma-list.component.scss'
})
export class TurmaListComponent {
  lista: Turma[] = [];
  
    constructor(){
      this.findAll();
      
    }
    findAll(){
      let turma1 = new Turma();
      turma1.id = 1;
      turma1.nomeTurma = 'Analise e Desenvolvimento de Software';
      turma1.semestre = "2°";
      turma1.ano = "3°";
      turma1.turno = 'Noturno'
  
      let turma2 = new Turma();
      turma2.id = 2;
      turma2.nomeTurma = 'Admintração';
      turma2.semestre = "1°";
      turma2.ano = "5°";
      turma2.turno = 'Matutino';
  
      let turma3 = new Turma();
      turma3.id = 3;
      turma3.nomeTurma = 'Fisica';
      turma3.semestre = "2°";
      turma3.ano = "1°";
      turma3.turno = 'Noturno';
      
      this.lista.push(turma1,turma2,turma3);
    }
  
    delete(turma: Turma){
      let indice = this.lista.findIndex(x => {return x.id == turma.id});
      if(confirm('Deseja deletar?')){
        this.lista.splice(indice, 1);
      }
    }
}
