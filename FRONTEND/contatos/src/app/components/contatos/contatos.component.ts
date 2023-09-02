import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})



export class ContatosComponent implements OnInit {

  ELEMENT_DATA: any = [];

  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  dataSourceWithPageSize = new MatTableDataSource<any>(this.ELEMENT_DATA);

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('paginatorPageSize') paginatorPageSize!: MatPaginator;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = this.ELEMENT_DATA;

  

  constructor() { }

  ngOnInit(): void {
    this.ELEMENT_DATA = [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
      { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
      { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
    ];
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    this.dataSourceWithPageSize = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;

    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
  }


}
