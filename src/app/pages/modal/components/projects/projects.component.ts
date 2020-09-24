import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProjectPage } from 'src/app/pages/project/project.page';
import { DataProvider } from 'src/app/services/data.service';

@Component({
  selector: 'jl-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  data: any;
  constructor(
    private modalController: ModalController,
    private dataProvider: DataProvider
  ) {
    this.data = this.dataProvider.data.projects;
  }

  async openProject(project: any) {
    const modal = await this.modalController.create({
      component: ProjectPage,
      componentProps: { data: project },
      cssClass: 'modal',
      mode: 'ios',
    });
    await modal.present();
  }

  openURL(url: string) {
    window.open(url);
  }
}
