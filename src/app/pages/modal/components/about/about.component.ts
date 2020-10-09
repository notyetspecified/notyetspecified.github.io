import { Component } from '@angular/core';
import { DataProvider } from 'src/app/services/data.service';

@Component({
  selector: './jl-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  data: any;
  count = 0;
  tc = 3;

  constructor(private dataProvider: DataProvider) {
    this.data = this.dataProvider.data.about;
  }

  clicked() {
    this.count >= this.tc ? (this.count = 1) : this.count++;
  }

  get srcImg() {
    return this.count === this.tc
      ? 'assets/img/gvtv.png'
      : 'assets/img/avatar.png';
  }
}
