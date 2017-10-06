import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-ytmodal',
  templateUrl: 'ytmodal.html',
})
export class YtModalPage {
  private title: string = 'OnTheMove';
  private link: string = 'https://www.youtube.com/embed/videoseries?list=PL54gydE8eCCpzeSeFT7xXd2gQln5TDjyj&amp;autoplay=1';
  private width: number = 350;
  private height: number = 581;
  private url: string;

  constructor(private sanitizer: DomSanitizer) {
    this.url = `${this.link}&amp;rel=0&amp;wmode=transparent`;
    console.warn(this.url);
  }

  getURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
