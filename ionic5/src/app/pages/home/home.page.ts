import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'page-home',
  templateUrl: './home.page.html'
})
export class HomePage {
  constructor(public modalController: ModalController) {}

  async ngOnInit() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'modal',
      mode: 'ios'
    });
    await modal.present();
  }
}
