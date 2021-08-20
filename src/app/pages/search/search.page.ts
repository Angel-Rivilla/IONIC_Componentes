import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albumes: any[] = [];
  textoBuscar: string = '';

  constructor(private dataSvc: DataService) { }

  ngOnInit() {
    this.dataSvc.getAlbumes().subscribe( res => {
      this.albumes = res;
    })
  }

  onSearchChange( event ) {
    this.textoBuscar = event.detail.value;
  }

}
