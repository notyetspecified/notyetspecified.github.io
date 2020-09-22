import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ModalPage } from './modal.page';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CvComponent } from './components/cv/cv.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [
    ModalPage,
    AboutComponent,
    SkillsComponent,
    CvComponent,
    ProjectsComponent,
    ContactComponent,
  ],
})
export class ModalPageModule {}
