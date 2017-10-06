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
    this.modalController.create('YtModalPage').present();
  }
}
