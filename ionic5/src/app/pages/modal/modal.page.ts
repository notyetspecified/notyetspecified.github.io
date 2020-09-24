import { Component } from '@angular/core';
import { DataProvider } from 'src/app/services/data.service';

@Component({
  selector: 'page-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {
  tab = 'about';
  data: any;

  constructor(private dataProvider: DataProvider) {
    this.data = this.dataProvider.data.modal;
  }

  get title() {
    return this.tab !== 'about' ? this.tab : '';
  }

  segmentChanged(event: CustomEvent) {
    this.tab = event.detail.value;
  }
}
