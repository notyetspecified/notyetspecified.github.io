import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalPageModule } from '../modal/modal.module';
import { ProjectPageModule } from '../project/project.module';

import { HomePage } from './home.page';
import { HomeRoutingModule } from './home.router.module';

@NgModule({
  imports: [IonicModule, HomeRoutingModule, ModalPageModule, ProjectPageModule],
  declarations: [HomePage],
})
export class HomePageModule {}
