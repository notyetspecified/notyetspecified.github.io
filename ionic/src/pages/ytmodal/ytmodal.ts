import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-ytmodal',
  templateUrl: 'ytmodal.html',
})
export class YtModalPage {
  @ViewChild(Content) content: Content;
  @ViewChild('videoPlayer') videoplayer: any;
  private title: string = 'OnTheMove';
  private videoSource: string = '../../assets/video/onthemove.mp4';
  private height: number;

  constructor() {
  }

  ngDoCheck() {
    this.height = this.content.contentHeight - 40;
    console.warn(this.content.contentHeight);
  }

  ionViewDidEnter() {
    this.videoplayer.nativeElement.play();
  }

  toggleVideo(event: any) {
    if(this.videoplayer.nativeElement.paused) {
      this.videoplayer.nativeElement.play();
    } else {
      this.videoplayer.nativeElement.pause();
    }
  }
}
