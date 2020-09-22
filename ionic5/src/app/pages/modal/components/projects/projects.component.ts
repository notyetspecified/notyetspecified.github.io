import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'jl-projects',
  templateUrl: 'projects.html',
})
export class ProjectsComponent {
  projects: Array<any> = [
    {
      title: 'iCare4Depression',
      date: 'WIP 2016',
      description:
        'A software bundle developed in the scope of iCare4Depression project (Portugal) by INESC TEC in partnership with ISMAI for the treatment of depression. The the set is made up of web and mobile applications that assists both patients and therapists/researchers in the course of treatment.',
      videoSource: 'icare4depression.mp4',
      logoSource: 'icare4depression.png',
    },
    {
      title: 'A-CAS',
      date: 'WIP 2016',
      description:
        'An app that, taking real time monitored parameters in anaesthesia, provides both clear value reading and a diagnostic through the Anaesthetic Crisis Manual (ACM).',
      videoSource: 'acas.mp4',
      logoSource: 'acas.png',
    },
    {
      title: 'On The Move',
      date: 'June 2014',
      description:
        'An Android app that helps the user navigating to/from the airport and follows him through the flight stages. This project was developed as part of a college project in collaboration with OPT (Optimização e Planeamento de Transportes, S.A.).',
      videoSource: 'onthemove.mp4',
      logoSource: 'onthemove.png',
    },
    {
      title: 'Bioterium',
      date: 'November 2013',
      description:
        'A management software product developed for ICBAS animal facility as part of a college project.',
      videoSource: 'bioterium.mp4',
      logoSource: 'bioterium.png',
      horizontal: true,
    },
  ];

  constructor(private modalController: ModalController) {}

  async openProject(project: any) {
    const modal = await this.modalController.create({
      component: project,
    });
    await modal.present();
  }

  openURL(url: string) {
    window.open(url);
  }
}
