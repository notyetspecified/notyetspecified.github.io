import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-project',
  templateUrl: 'project.html',
})
export class ProjectPage {
  @ViewChild(Content) content: Content;
  @ViewChild('videoPlayer') videoplayer: any;

  private data: any;

  private height: number;
  private width: number;

  constructor(navParams: NavParams) {
    this.data = navParams.data;
    this.data.videoSource = '../../assets/video/' + navParams.data.videoSource;
    this.data.logoSource = '../../assets/img/logo/' + navParams.data.logoSource;

  }

  ngDoCheck() {
    if (window.innerWidth > 768) {
      this.width = this.content.contentWidth / 2;
      this.height = this.content.contentHeight - 40;
    } else {
      this.width = this.content.contentWidth;
      this.height = this.content.contentHeight - 40;
    }
  }

  ionViewDidEnter() {
    this.videoplayer.nativeElement.muted = true;
    this.videoplayer.nativeElement.play();
  }

  toggleVideo(event: any) {
    if (this.videoplayer.nativeElement.paused) {
      this.videoplayer.nativeElement.play();
    } else {
      this.videoplayer.nativeElement.pause();
    }
  }
}
