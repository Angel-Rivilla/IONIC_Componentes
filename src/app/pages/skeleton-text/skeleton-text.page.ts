import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-skeleton-text',
  templateUrl: './skeleton-text.page.html',
  styleUrls: ['./skeleton-text.page.scss'],
})
export class SkeletonTextPage implements OnInit {

  pokemons: Observable<any>;
  numberLoadingPokemons: number;
  loadingPokemons: any[] = Array(10);
  region: string = '';
  
  constructor(private dataSvc: DataService) { }

  ngOnInit() {
    this.pokemons = this.dataSvc.getPokemons();

    //this.pokemons.subscribe(res => {
      //this.numberLoadingPokemons = res.length;
      //this.loadingPokemons = Array(this.numberLoadingPokemons);
    //});

  }

  segmentChanged( event ) {
    this.region = event.detail.value;
  }
}
