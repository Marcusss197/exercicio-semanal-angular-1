import { Component, inject } from '@angular/core';
import { Aluno } from '../../../models/aluno';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aluno-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.scss'
})
export class AlunoFormComponent {
  aluno: Aluno = new Aluno();
  rotaAtivida = inject(ActivatedRoute);
  constructor(){
    let id = this.rotaAtivida.snapshot.params['id'];
    if(id){
      let aluno1 = new Aluno();
      aluno1.id = 1;
      aluno1.nomeAluno = 'Leticia';
      aluno1.cpf = '800.344.010-67';
      aluno1.telefone = '(84) 3478-5181';
      this.aluno = aluno1;
    }
  }
  save(){
    if(this.aluno && this.aluno.id > 0){
      alert('estou fazendo um update...');
    }else{
      alert('Salvando');
    }
  }
}
