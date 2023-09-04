import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-dialog-novo-contato',
  templateUrl: './dialog-novo-contato.component.html',
  styleUrls: ['./dialog-novo-contato.component.css']
})
export class DialogNovoContatoComponent {

  contato: Contato = {
    id: '',
    nome: '',
    tel: '',
    codTipoTel: -1,
    email: '',
    dataCriacao: '',
    dataModificacao: ''
  }

  // nome: FormControl = new FormControl(null, Validators.required);
  // tel: FormControl = new FormControl(null, Validators.required);
  // codTipoTel: FormControl = new FormControl();
  // email: FormControl = new FormControl();

  public tipoTel = [
    { codigo: 0, descricao: 'FIXO' },
    { codigo: 1, descricao: 'CELULAR' }
  ];

  constructor(
    public dialogRef: MatDialogRef<DialogNovoContatoComponent>,
    private service: ContatoService,
    private router: Router
  ) {}

  cancelar(): void {
    this.dialogRef.close();
  }

  escolherTipo(cod: number) {
    this.contato.codTipoTel = cod;
  }

  salvarNovoContato() {
    // console.log('CONTATO:', this.contato);
    // console.log('Código do telefone: ', this.contato.codTipoTel)

    this.service.salvarContato(this.contato).subscribe( () => {
      console.log('Consegui salvar')
    }, ex => {
      // console.log(ex);
    });

    this.dialogRef.close();
    this.router.navigate(['contatos']); // Não funciona para dar refresh no componente!
  }

  validaCampos(): boolean {
    // let validNome = this.nome.valid;
    // let validTel = this.tel.valid;
    let validNome = this.contato.nome.length >= 3;
    let validTel = this.contato.tel.length >= 7;
    let validCodTipoTel = this.contato.codTipoTel !== -1;
    return validNome && validTel && validCodTipoTel;
  }

}
