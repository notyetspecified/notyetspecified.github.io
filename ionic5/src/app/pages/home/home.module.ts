import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalPageModule } from '../modal/modal.module';

import { HomePage } from './home.page';
import { HomeRoutingModule } from './home.router.module';

@NgModule({
  imports: [IonicModule, HomeRoutingModule, ModalPageModule],
  declarations: [HomePage],
})
export class HomePageModule {}
