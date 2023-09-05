import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-editar-contato',
  templateUrl: './dialog-editar-contato.component.html',
  styleUrls: ['./dialog-editar-contato.component.css']
})
export class DialogEditarContatoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log('O id é o seguinte', this.data.dataKey.id);
  }

}
