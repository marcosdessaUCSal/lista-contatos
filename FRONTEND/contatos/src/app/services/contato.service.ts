import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from '../models/Contato';
import { API_CONFIG } from '../config/api-config';
import { TipoTel } from '../models/TipoTel';

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

  findById(id: number): Observable<Contato> {
    return this.http.get<Contato>(`${API_CONFIG.baseUrl}/contatos/` + id);
  }

  findTiposTel(): Observable<TipoTel[]> {
    return this.http.get<TipoTel[]>(`${API_CONFIG.baseUrl}/contatos/tipostel`);
  }

  salvarContato(contato: Contato): Observable<Contato> {
    let obj = {
      nome: contato.nome,
      tel: contato.tel,
      email: contato.email,
      codTipoTel: contato.codTipoTel,
    }
    return this.http.post<Contato>(`${API_CONFIG.baseUrl}/contatos`, obj);
  }

  atualizarContato(contato: Contato): Observable<Contato> {
    let obj = {
      id: contato.id,
      nome: contato.nome,
      tel: contato.tel,
      email: contato.email,
      codTipoTel: contato.codTipoTel,
    }
    return this.http.put<Contato>(`${API_CONFIG.baseUrl}/contatos`, obj);
  }

  removeContato(id: number): Observable<any> {
    return this.http.delete<any>(`${API_CONFIG.baseUrl}/contatos/` + id);
  }


}
