import { Component } from '@angular/core';
import { Professor } from '../../../models/professor';


@Component({
  selector: 'app-professor-list',
  standalone: true,
  imports: [],
  templateUrl: './professor-list.component.html',
  styleUrl: './professor-list.component.scss'
})
export class ProfessorListComponent {
  lista: Professor[] = [];
  
  constructor(){
    this.findAll();
    
  }
  findAll(){
    let professor1 = new Professor();
    professor1.id = 1;
    professor1.nomeProfessor = 'Leandro';
    professor1.cpf = '884.456.810-10';
    professor1.email = 'leandrosobecapa@gmail.com';
    professor1.especialidade = 'Fisica';

    let professor2 = new Professor();
    professor2.id = 2;
    professor2.nomeProfessor = 'Isac';
    professor2.cpf = '290.615.740-64';
    professor2.email = 'isaclapadas@yahoo.com';
    professor2.especialidade = 'Adminstrador';

    let professor3 = new Professor();
    professor3.id = 3;
    professor3.nomeProfessor = 'Thomas';
    professor3.cpf = '411.411.420-31';
    professor3.email = 'thomas.turbando@outlook.com';
    professor3.especialidade = 'Engenheiro Civil';
    
    this.lista.push(professor1,professor2,professor3);
  }

  delete(professor: Professor){
    let indice = this.lista.findIndex(x => {return x.id == professor.id});
    if(confirm('Deseja deletar?')){
      this.lista.splice(indice, 1);
    }
  }
}
