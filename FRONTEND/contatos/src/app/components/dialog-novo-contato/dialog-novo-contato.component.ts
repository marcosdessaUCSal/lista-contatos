import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Contato } from 'src/app/models/Contato';
import { TipoTel } from 'src/app/models/TipoTel';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-dialog-novo-contato',
  templateUrl: './dialog-novo-contato.component.html',
  styleUrls: ['./dialog-novo-contato.component.css']
})
export class DialogNovoContatoComponent implements OnInit {

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
    public dialogRef: MatDialogRef<DialogNovoContatoComponent>,
    private service: ContatoService,
    private toast: ToastrService
  ) {}


  ngOnInit(): void {
    this.service.findTiposTel().subscribe(
      resposta => {
        this.tiposTel = resposta;
      }
    );
  }

  cancelar(): void {
    this.dialogRef.close();
  }

  escolherTipo(cod: number) {
    this.contato.codTipoTel = cod;
  }

  salvarNovoContato() {
    this.service.salvarContato(this.contato).subscribe( () => {
      this.toast.success(`Contato ${this.contato.nome} cadastrado com sucesso`, 'Cadastro');
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
