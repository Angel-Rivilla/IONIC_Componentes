import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  pokemons: Observable<any>;
  region: string = '';
  
  constructor(private dataSvc: DataService) { }

  ngOnInit() {
    this.pokemons = this.dataSvc.getPokemons();
  }

  segmentChanged( event ) {
    this.region = event.detail.value;
  }

}
