import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPage } from './modal';
import { ModalModule } from '../../shared/modules/about.module';

@NgModule({
  declarations: [
    ModalPage,
  ],
  imports: [
    ModalModule,
    IonicPageModule.forChild(ModalPage),
  ],
})
export class ModalPageModule {}
