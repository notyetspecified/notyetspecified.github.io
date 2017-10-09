import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  tab: string = 'about';

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  segmentChanged(event: any) {
    console.warn(event);
  }
}
