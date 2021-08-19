import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/componente';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getUsuarios() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts() {
    return this.httpClient.get<Componente[]>('/assets/data/menu-opts.json');
  }
}
