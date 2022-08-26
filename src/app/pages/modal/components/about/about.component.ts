import { Component } from '@angular/core';
import { DataProvider } from 'src/app/services/data.service';

@Component({
  selector: './jl-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  data: any;

  constructor(private dataProvider: DataProvider) {
    this.data = this.dataProvider.data.about;
  }
}
