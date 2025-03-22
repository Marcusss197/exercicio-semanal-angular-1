import { Component } from '@angular/core';
import { Aluno } from '../../../models/aluno';

@Component({
  selector: 'app-aluno-list',
  standalone: true,
  imports: [],
  templateUrl: './aluno-list.component.html',
  styleUrl: './aluno-list.component.scss'
})
export class AlunoListComponent {
      lista: Aluno[] = [];

      constructor(){
        this.findAll();
      }


findAll(){
  let aluno1 = new Aluno();
  aluno1.id = 1;
  aluno1.nomeAluno = 'Leticia';
  aluno1.cpf = '800.344.010-67';
  aluno1.telefone = '(84) 3478-5181';

  let aluno2 = new Aluno();
  aluno2.id = 2;
  aluno2.nomeAluno = 'Janine';
  aluno2.cpf = '975.189.030-67';
  aluno2.telefone = '(66) 2682-7123';

  let aluno3 = new Aluno();
  aluno3.id = 3;
  aluno3.nomeAluno = 'Lucas';
  aluno3.cpf = '985.994.270-67';
  aluno3.telefone = '(64) 2875-6169';
  
  this.lista.push(aluno1, aluno2, aluno3);
}

delete(aluno: Aluno){
  let indice = this.lista.findIndex(x => {return x.id == aluno.id});
  if(confirm('Deseja deletar?')){
    this.lista.splice(indice, 1);
  }
}
}