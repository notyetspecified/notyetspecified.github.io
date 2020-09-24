import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonContent, ModalController } from '@ionic/angular';

@Component({
  selector: 'page-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage {
  @ViewChild('content') content: IonContent;
  @ViewChild('videoPlayer') videoplayer: ElementRef;

  data: any;
  height: number;
  width: number;

  constructor(private modalController: ModalController) {}

  ionViewDidEnter() {
    this.videoplayer.nativeElement.muted = true;
    this.videoplayer.nativeElement.play();
  }

  close() {
    this.modalController.dismiss();
  }
}
