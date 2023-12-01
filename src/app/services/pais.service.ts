import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../models/pais.model';

const baseUrl = 'https://localhost:7200/api/paises';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  constructor(private http: HttpClient) { }

  ListarPaises(): Observable<Pais[]> {
    return this.http.get<Pais[]>(baseUrl);
  }

  ConsultarPaisPeloISO(codigoISO: string): Observable<Pais> {
    return this.http.get<Pais>(`${baseUrl}/${codigoISO}`);
  }

  AdicionarPais(pais: any): Observable<any> {
    return this.http.post(baseUrl, pais);
  }
}
