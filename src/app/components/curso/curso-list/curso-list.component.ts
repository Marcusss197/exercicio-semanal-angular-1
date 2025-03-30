import { Component, inject } from '@angular/core';
import { Curso } from '../../../models/curso';
import { CursoService } from '../../../services/curso.service';

@Component({
  selector: 'app-curso-list',
  standalone: true,
  imports: [],
  templateUrl: './curso-list.component.html',
  styleUrl: './curso-list.component.scss'
})
export class CursoListComponent {
  lista: Curso[] = [];
  
  cursoService = inject(CursoService);
        constructor(){
          this.findAll();
        }


findAll(){
  this.cursoService.findAll().subscribe({
    next: (listaRetornada) => {
      this.lista = listaRetornada;
    },
    error: (erro) => {
      alert('Deu erro!');
    }
  });

}

delete(curso: Curso){
  let indice = this.lista.findIndex(x => {return x.id == curso.id});
  if(confirm('Deseja deletar?')){
    this.cursoService.deleteById(curso.id).subscribe({
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