import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(private platform: Platform, private modalController: ModalController) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.openModal();
    });
  }

  openModal() {
    let modal = this.modalController.create('ModalPage');
    modal.onDidDismiss(() => {
      this.openModal();
    });
    modal.present();
  }
}
