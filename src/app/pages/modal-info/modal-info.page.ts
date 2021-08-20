import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre: string;
  @Input() apellido: string;
  @Input() pais: string;
  

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  salirSinArgumentos() {
    this.modalController.dismiss();
  }

  salirConArgumentos() {
    this.modalController.dismiss({
      nombre: 'Javier',
      apellido: 'Rivilla',
      pais: 'Spain'
    });
  }
}
