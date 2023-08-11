import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, NavController} from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { HttpActivityService } from '../service/http-activity/http-activity.service';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss'],
})

export class BotComponent  implements OnInit {
  
  @ViewChild(IonContent) content: IonContent;

  data: any[] = [
    {id: 1, sender: 1, message: 'What do I can to you?'},
    {id: 2, sender: 2, message: 'I want recipe in the power.'},
    {id: 3, sender: 1, message: 'Watt = Volt * Amps'}
  ];
  
  message: string = "";
  isLoading: boolean = false;
  chats: Observable<any[]> = of(this.data);

  constructor(public navCtrl: NavController, private httpActivity: HttpActivityService) {}

  ngOnInit() {
    alert("here there");
    this.httpActivity.getAll().subscribe((index) => {console.log(index);})
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
