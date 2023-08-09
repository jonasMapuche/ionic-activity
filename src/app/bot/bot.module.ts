import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BotComponent } from './bot.component';
import { BotBoxComponent } from '../component/bot-box/bot-box.component';

import { BotRoutingModule } from './bot-routing.module';


@NgModule({
  declarations: [
    BotComponent,
    BotBoxComponent
  ],
  imports: [
    CommonModule,
    BotRoutingModule,
    FormsModule,
    IonicModule
  ]
})
export class BotModule { }
