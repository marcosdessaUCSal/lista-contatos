import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from '../models/Contato';
import { API_CONFIG } from '../config/api-config';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  constructor(
    private http: HttpClient
  ) { }


  findAll(): Observable<Contato[]> {
    return this.http.get<Contato[]>(`${API_CONFIG.baseUrl}/contatos`, this.httpOptions);
  }


}
