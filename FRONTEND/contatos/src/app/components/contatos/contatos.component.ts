import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})



export class ContatosComponent implements OnInit {

  ELEMENT_DATA: Contato[] = [];
  displayedColumns: string[] = ['nome', 'tel', 'tipotel', 'email', 'd_criacao', 'd_modificacao'];

  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  dataSourceWithPageSize = new MatTableDataSource<any>(this.ELEMENT_DATA);

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('paginatorPageSize') paginatorPageSize!: MatPaginator;

  tipoTel = [
    { codigo: 0, descricao: 'FIXO' },
    { codigo: 1, descricao: 'CELULAR' }
  ];




  constructor(
    private service: ContatoService
  ) { }

  ngOnInit(): void {
    // this.ELEMENT_DATA = [
    //   { id: '', nome: 'Marcos', tel: '5556543', codTipoTel: 0, email: 'marcos@mail.com', dataCriacao: '11/11/2023', dataModificacao: '111/11/2023' },
    //   { id: '', nome: 'Zilene', tel: '12345667', codTipoTel: 1, email: 'zilene@mail.com', dataCriacao: '11/11/2023', dataModificacao: '111/11/2023' }
    // ];
    this.service.findAll().subscribe(
      resposta => {
        this.ELEMENT_DATA = resposta;
        this.dataSource = new MatTableDataSource<Contato>(this.ELEMENT_DATA);
        this.dataSourceWithPageSize = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
      }
    );
    console.log(this.ELEMENT_DATA)

    // this.dataSource = new MatTableDataSource<Contato>(this.ELEMENT_DATA);
    // this.dataSourceWithPageSize = new MatTableDataSource(this.ELEMENT_DATA);
    // this.dataSource.paginator = this.paginator;


  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
  }





  identificaCodTipoTel(cod: number): string {
    let tipo: string = '';
    this.tipoTel.forEach(
      x => {
        if (x.codigo == cod) {
          tipo = x.descricao;
        }
      }
    );
    return tipo;
  }


}
