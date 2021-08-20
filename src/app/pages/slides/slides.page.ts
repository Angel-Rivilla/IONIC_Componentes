import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  slides: Observable<any>;

  constructor(private navController: NavController,
              private dataSvc: DataService) { }

  ngOnInit() {
    this.slides = this.dataSvc.getSlides();
  }
  
  onClick() {
    this.navController.navigateBack('/');
  }
}
