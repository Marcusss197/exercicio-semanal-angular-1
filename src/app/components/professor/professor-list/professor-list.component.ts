import { Component, inject } from '@angular/core';
import { Professor } from '../../../models/professor';
import { ProfessorService } from '../../../services/professor.service';


@Component({
  selector: 'app-professor-list',
  standalone: true,
  imports: [],
  templateUrl: './professor-list.component.html',
  styleUrl: './professor-list.component.scss'
})
export class ProfessorListComponent {
  lista: Professor[] = [];
  
  professorService = inject(ProfessorService);
          constructor(){
            this.findAll();
          }
  findAll(){
    this.professorService.findAll().subscribe({
      next: (listaRetornada) => {
        this.lista = listaRetornada;
      },
      error: (erro) => {
        alert('Deu erro!');
      }
    });
  
  }
  
  delete(professor: Professor){
    let indice = this.lista.findIndex(x => {return x.id == professor.id});
    if(confirm('Deseja deletar?')){
      this.professorService.deleteById(professor.id).subscribe({
        next: (mensagem) => {
          alert(mensagem);
          this.findAll();
        },
        error: (erro) => {
          alert('Deu erro!');
        }
      });
    }
  }
}
