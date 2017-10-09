import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'jl-projects',
  templateUrl: 'projects.html',
})
export class ProjectsComponent {
  constructor(private modalController: ModalController) {
    this.openModal();
  }

  openModal() {
    let data: any = {
      title: 'On The Move',
      date: 'June 2014',
      description:
        'An Android app that helps the user navigating to/from the airport and follows him through the flight stages. This project was developed as part of a college project in collaboration with OPT (Optimização e Planeamento de Transportes, S.A.).',
      videoSource: 'onthemove.mp4',
      logoSource: 'onthemove.png',
    };
    this.modalController.create('ProjectPage', data).present();
  }
}
