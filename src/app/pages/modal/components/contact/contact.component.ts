import { Component } from '@angular/core';
import { DataProvider } from 'src/app/services/data.service';

@Component({
  selector: 'jl-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  data: any;
  constructor(private dataProvider: DataProvider) {
    this.data = this.dataProvider.data.contact;
  }

  openURL(url: string) {
    window.open(url);
  }
}
