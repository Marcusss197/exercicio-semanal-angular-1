import { Component, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Turma } from '../../../models/turma';

@Component({
  selector: 'app-turma-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './turma-form.component.html',
  styleUrl: './turma-form.component.scss'
})
export class TurmaFormComponent {
  turma: Turma = new Turma();
  rotaAtivida = inject(ActivatedRoute);
  constructor(){
    let id = this.rotaAtivida.snapshot.params['id'];
    if(id){
      let turma1 = new Turma();
      turma1.id = 1;
      turma1.nomeTurma = 'Analise e Desenvolvimento de Software';
      turma1.semestre = "2";
      turma1.ano = "3°";
      turma1.turno = 'Noturno'
      this.turma = turma1;
    }
  }
  save(){
    if(this.turma && this.turma.id > 0){
      alert('estou fazendo um update...');
    }else{
      alert('Salvando');
    }
  }
}
