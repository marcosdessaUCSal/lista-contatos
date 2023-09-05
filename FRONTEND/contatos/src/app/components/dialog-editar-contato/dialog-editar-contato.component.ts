import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Contato } from 'src/app/models/Contato';
import { TipoTel } from 'src/app/models/TipoTel';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-dialog-editar-contato',
  templateUrl: './dialog-editar-contato.component.html',
  styleUrls: ['./dialog-editar-contato.component.css']
})
export class DialogEditarContatoComponent implements OnInit {

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
    public dialogRef: MatDialogRef<DialogEditarContatoComponent>,
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
    // console.log('O id é o seguinte', this.data.dataKey.id);
  }


  cancelar(): void {
    this.dialogRef.close();
  }

  escolherTipo(cod: number) {
    this.contato.codTipoTel = cod;
  }

  atualizarContato() {

    this.service.atualizarContato(this.contato).subscribe( () => {
      this.toast.success(`Contato ${this.contato.nome} atualizado com sucesso`, 'Cadastro');
    }, ex => {
      this.toast.error(ex.message, 'Erro');
    });

    this.dialogRef.close();
  }

  validaCampos(): boolean {
    let validNome = this.contato.nome.length >= 3;
    let validTel = this.contato.tel.length >= 7;
    let validCodTipoTel = this.contato.codTipoTel !== -1;
    return validNome && validTel && validCodTipoTel;
  }

}
