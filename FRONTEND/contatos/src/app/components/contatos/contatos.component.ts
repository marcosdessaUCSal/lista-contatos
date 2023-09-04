import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contato.service';
import { DialogNovoContatoComponent } from './../dialog-novo-contato/dialog-novo-contato.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})



export class ContatosComponent implements OnInit, AfterViewInit {

  ELEMENT_DATA: Contato[] = [];
  displayedColumns: string[] = ['nome', 'tel', 'tipotel', 'email', 'd_criacao', 'd_modificacao', 'acoes'];

  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  dataSourceWithPageSize = new MatTableDataSource<any>(this.ELEMENT_DATA);

  @ViewChild('paginator') paginator!: MatPaginator;

  tipoTel = [
    { codigo: 0, descricao: 'FIXO' },
    { codigo: 1, descricao: 'CELULAR' }
  ];




  constructor(
    private service: ContatoService,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) { }


  openDialog(): void {
    console.log('O toastr deveria funcionar agora')
    this.toastr.success('Sucesso', 'Estou funcionando!');
    const dialogRef = this.dialog.open(DialogNovoContatoComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
      this.toastr.success('Sucesso', 'Contato salvo com sucesso!');
      console.log('Rodei!!!!!')
    });
  }

  ngOnInit(): void {
    this.service.findAll().subscribe(
      resposta => {
        this.ELEMENT_DATA = resposta;
        this.dataSource = new MatTableDataSource<Contato>(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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

  filtrando(event: Event) {
    const valorFiltro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorFiltro.trim().toLowerCase();
  }

  algo() {
    alert('Algo aconteceu')
  }




}
