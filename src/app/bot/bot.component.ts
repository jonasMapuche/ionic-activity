import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss'],
})
export class BotComponent  implements OnInit {

  message: string = "";
  isLoading: boolean = false;
  chats = [
    {id: 1, sender: 1, message: 'Hello'},
    {id: 2, sender: 2, message: 'Hello world!'}
  ];

  constructor(public navCtrl: NavController) { }

  ngOnInit() {}

  gotoHomePage() {
    this.navCtrl.navigateForward('home');
  }
  sendMessage() {}

}
