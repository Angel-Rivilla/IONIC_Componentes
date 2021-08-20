import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/componente';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getUsuarios() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  getAlbumes() {
    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/albums');
  }

  getPokemons() {
    return this.httpClient.get<any>('/assets/data/pokemons.json')
            .pipe(
              delay( 1500 )
            );
  }

  getSlides() {
    return this.httpClient.get<any>('/assets/data/slides.json');
  }

  getMenuOpts() {
    return this.httpClient.get<Componente[]>('/assets/data/menu-opts.json');
  }
}
