import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavParams, ViewController } from 'ionic-angular';

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

  constructor(navParams: NavParams, private viewController: ViewController) {
    this.data = navParams.data;
  }

  ngDoCheck() {
    if (this.data.horizontal) {
      if (window.innerWidth > 768) {
        this.width = this.content.contentWidth - 80;
      } else {
        this.width = this.content.contentWidth;
      }
    } else {
      if (window.innerWidth > 768) {
        this.width = this.content.contentWidth / 2;
        this.height = this.content.contentHeight - 40;
      } else {
        this.width = this.content.contentWidth;
        this.height = this.content.contentHeight - 40;
      }
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

  close() {
    this.viewController.dismiss();
  }
}
