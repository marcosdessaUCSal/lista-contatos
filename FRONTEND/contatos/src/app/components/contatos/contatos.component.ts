import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contato.service';
import { DialogEditarContatoComponent } from '../dialog-editar-contato/dialog-editar-contato.component';
import { DialogNovoContatoComponent } from './../dialog-novo-contato/dialog-novo-contato.component';
import { ToastrService } from 'ngx-toastr';
import { DialogRef } from '@angular/cdk/dialog';
import { Router } from '@angular/router';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';

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
    private toast: ToastrService,
    private router: Router,
    public dialog: MatDialog
  ) { }
  


  openDialogCriar(): void {
    const dialogRef = this.dialog.open(DialogNovoContatoComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  openDialogEditar(id: number): void {
    const dialogRef = this.dialog.open(DialogEditarContatoComponent, {
      data: {
        dataKey: {id: id}
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
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

  delete(id: number): void {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      data: {
        dataKey: {id: id}
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
    console.log('Isto não deveria ter aparecido ainda!')
    // this.service.findAll().subscribe(
    //   resposta => {
    //     this.ELEMENT_DATA = resposta;
    //     this.dataSource = new MatTableDataSource<Contato>(this.ELEMENT_DATA);
    //     this.dataSource.paginator = this.paginator;
    //   }
    // );
    // let currentUrl = this.router.url;
    // this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    //     this.router.navigate([currentUrl]);
    // });
  }




}
