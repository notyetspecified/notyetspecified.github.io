import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { AboutComponent } from '../components/about/about.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { CvComponent } from '../components/cv/cv.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ContactComponent } from '../components/contact/contact.component';

@NgModule({
  declarations: [
    AboutComponent,
    SkillsComponent,
    CvComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
  ],
  exports: [
    AboutComponent,
    SkillsComponent,
    CvComponent,
    ProjectsComponent,
    ContactComponent,
  ],
})
export class ModalModule {}
