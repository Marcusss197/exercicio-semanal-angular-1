import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Turma } from '../../../models/turma';
import { TurmaService } from '../../../services/turma.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-turma-list',
  standalone: true,
  imports: [],
  templateUrl: './turma-list.component.html',
  styleUrl: './turma-list.component.scss'
})
export class TurmaListComponent {
  lista: Turma[] = [];

  @Input("modoModal") modoModal: boolean = false;
  @Output("meuEvento") meuEvento = new EventEmitter();
  
    turmaService = inject(TurmaService);
            constructor(){
              this.findAll();
            }
            findAll(){
   
              this.turmaService.findAll().subscribe({
                next: (listaRetornada) => {
                  this.lista = listaRetornada;
                },
                error: (erro) => {
                  Swal.fire(erro.error, '', 'error');
                }
              });
            
            }
          
            delete(turma: Turma){
          
              Swal.fire({
                title: 'Deseja mesmo deleatr?',
                showCancelButton: true,
                confirmButtonText: 'Sim',
                cancelButtonText: `Cancelar`,
              }).then((result) => {
                if (result.isConfirmed) {
          
                  this.turmaService.deleteById(turma.id).subscribe({
                    next: (mensagem) => {
                      Swal.fire(mensagem, '', 'success');
                      this.findAll();
                    },
                    error: (erro) => {
                      Swal.fire(erro.error, '', 'error');
                    }
                  });
                  
                }
              });
          
            }
          
          
            selecionar(turma: Turma){
              this.meuEvento.emit(turma); //esse disparo vai acionar o método do FORM
            }
}
