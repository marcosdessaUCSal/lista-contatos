import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Contato } from 'src/app/models/Contato';
import { TipoTel } from 'src/app/models/TipoTel';
import { ContatoService } from 'src/app/services/contato.service';


@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.css']
})
export class DialogConfirmComponent implements OnInit {

  contato: Contato = {
    id: '',
    nome: '',
    tel: '',
    codTipoTel: -1,
    email: '',
    dataCriacao: '',
    dataModificacao: ''
  }

  public tiposTel: TipoTel[] = [];

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmComponent>,
    private service: ContatoService,
    private toast: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}


  ngOnInit(): void {
    this.service.findById(this.data.dataKey.id).subscribe(
      resposta => this.contato = resposta
    );
    this.service.findTiposTel().subscribe(
      resposta => {
        this.tiposTel = resposta;
      }
    );
  }

  
  cancelar(): void {
    this.dialogRef.close();
  }

  remover(): void {
    this.service.removeContato(this.data.dataKey.id).subscribe(() => {
      this.toast.success('Contato removido com sucesso', 'Remoção');
    }, ex => {
      this.toast.error(ex.message, 'Erro');
    });
    this.dialogRef.close();
  }

}
