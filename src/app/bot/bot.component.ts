import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, NavController} from '@ionic/angular';
import { Observable, concat, of } from 'rxjs';
import { HttpActivityService } from '../service/http-activity/http-activity.service';
import { HttpBotService } from '../service/http-bot/http-bot.service';
import { ItemActivity } from '../model/activity';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss'],
})

export class BotComponent  implements OnInit {
  
  @ViewChild(IonContent) content: IonContent;

  data: any[] = [];
  
  message: string = "";
  isLoading: boolean = false;
  chats: Observable<any[]> = of(this.data);

  constructor(public navCtrl: NavController, private httpActivity: HttpActivityService, private httpBot: HttpBotService) {}

  body: any = {id: 1, sender: 1, message: 'What can I do?'};

  ngOnInit() {

    function filterByFramework(obj: any) {
      if (obj == "watts") {
        return true;
      } else {
        return false;
      }
    }

    function filterByName(obj: any) {
      if (obj.activity.framework.filter(filterByFramework)) {
        return true;
      } else {
        return false;
      }
    }

    this.httpBot.postMessage(this.body).subscribe((index) => {this.data.push(index);});
    this.httpActivity.getFramework("power").subscribe((index) => {
      var msg1: string = "";
      index.filter(filterByName).map(v => v.name).forEach(msg => {
        msg1 = msg1 + " " + msg;
      })
      const msg2 = {
        id: 1,
        sender: 1,
        message: "power = " + msg1
      }
      this.data.push(msg2);
    });



  } 

  gotoHomePage() {
    this.navCtrl.navigateForward('home');
  }

  sendMessage() {
    const msg = {
      id: 3,
      sender: 2,
      message: this.message 
    }
    this.data.push(msg)
    this.message = "";
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.content.scrollToBottom(500);
  }



}
