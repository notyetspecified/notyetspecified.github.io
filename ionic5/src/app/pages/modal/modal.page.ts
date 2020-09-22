import { Component } from '@angular/core';

@Component({
  selector: 'page-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {
  tab = 'about';

  constructor() {}

  segmentChanged(event: CustomEvent) {
    this.tab = event.detail.value;
  }
}
