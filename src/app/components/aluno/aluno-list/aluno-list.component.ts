import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { Aluno } from '../../../models/aluno';
import { AlunoService } from '../../../services/aluno.service';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import Swal from 'sweetalert2';
import { AlunoFormComponent } from '../aluno-form/aluno-form.component';

@Component({
  selector: 'app-aluno-list',
  standalone: true,
  imports: [MdbModalModule, AlunoFormComponent],
  templateUrl: './aluno-list.component.html',
  styleUrl: './aluno-list.component.scss'
})
export class AlunoListComponent {
      lista: Aluno[] = [];
      pesquisa: string = "";
      alunoEdit!: Aluno;
    
      @ViewChild("modalAlunoForm") modalAlunoForm!: TemplateRef<any>; //referência ao template da modal
      modalService = inject(MdbModalService); //para abrir a modal
      modalRef!: MdbModalRef<any>; //vc conseguir fechar a modal depois
    

      alunoService = inject(AlunoService);
      constructor(){
        this.findAll();
      }


      findAll(){
   
        this.alunoService.findAll().subscribe({
          next: (listaRetornada) => {
            this.lista = listaRetornada;
          },
          error: (erro) => {
            Swal.fire(erro.error, '', 'error');
          }
        });
      
      }
    
      delete(aluno: Aluno){
    
        Swal.fire({
          title: 'Deseja mesmo deletar?',
          showCancelButton: true,
          confirmButtonText: 'Sim',
          cancelButtonText: `Cancelar`,
        }).then((result) => {
          if (result.isConfirmed) {
    
            this.alunoService.deleteById(aluno.id).subscribe({
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
    
      new(){ //ABRIR
        this.alunoEdit = new Aluno(); 
        this.modalRef = this.modalService.open(this.modalAlunoForm, { modalClass: 'modal-xl'});
      }
    
      edit(aluno: Aluno){
        this.alunoEdit = aluno;
        this.modalRef = this.modalService.open(this.modalAlunoForm, { modalClass: 'modal-xl'});
      }
    
      meuEventoTratamento(mensagem:any){
        this.findAll();
        this.modalRef.close();
      }
}