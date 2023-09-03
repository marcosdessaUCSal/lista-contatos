import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from '../models/Contato';
import { API_CONFIG } from '../config/api-config';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {


  constructor(
    private http: HttpClient
  ) { }


  findAll(): Observable<Contato[]> {
    return this.http.get<Contato[]>(`${API_CONFIG.baseUrl}/contatos`);
  }


}
