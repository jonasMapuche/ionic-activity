import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SettingComponent } from './setting.component';

import { SettingRoutingModule } from './setting-routing.module';


@NgModule({
  declarations: [
    SettingComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    FormsModule,
    IonicModule
  ]
})
export class SettingModule { }
