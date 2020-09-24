import { Component } from '@angular/core';

@Component({
  selector: './jl-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {
  constructor() {}

  openURL(url: string) {
    window.open(url);
  }
}
