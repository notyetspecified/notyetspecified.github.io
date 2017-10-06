import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YtModalPage } from './ytmodal';

@NgModule({
  declarations: [
    YtModalPage,
  ],
  imports: [
    IonicPageModule.forChild(YtModalPage),
  ],
})
export class YtModalPageModule {}
