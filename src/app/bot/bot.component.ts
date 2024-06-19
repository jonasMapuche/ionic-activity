import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { IonContent, NavController} from '@ionic/angular';
import { Observable, concat, of } from 'rxjs';
import { HttpActivityService } from '../service/http-activity/http-activity.service';
import { HttpBotService } from '../service/http-bot/http-bot.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss'],
})

export class BotComponent  implements OnInit {
  
  @ViewChild(IonContent) content: IonContent;

  data: any[] = [];
  private formula: string;

  public param!: string;
  
  message: string = "";
  isLoading: boolean = false;
  chats: Observable<any[]> = of(this.data);
  private activatedRoute = inject(ActivatedRoute);

  constructor(
    public navCtrl: NavController, 
    private httpActivity: HttpActivityService, 
    private httpBot: HttpBotService) {};

  ngOnInit() {

    this.param = this.activatedRoute.snapshot.paramMap.get('id') as string;

    if (this.param=="null") {
      const body = {id: 1, sender: 1, message: 'What can I do?'};
      this.httpBot.postMessage(body).subscribe((index) => {this.data.push(index);});
    } else {
      this.httpActivity.getName(this.param).subscribe(index => {
        index.forEach(index2 => {
            const obj = {name: index2.formula.name[0]};
            this.formula = obj.name.toString();
          });
          this.httpActivity.getFramework(this.formula).subscribe(index => {
            index.forEach(index2 => {
              const obj = {
                id: 1, 
                sender: 1, 
                message: index2.name[0]
              };
              this.data.push(obj);
            });
          });
      });
    };

  }; 

  gotoHomePage() {
    this.navCtrl.navigateForward('home');
  };

  sendMessage() {
    const body = {id: 3, sender: 2, message: this.message};
    this.data.push(body)
    this.message = "";
  };

  ngAfterViewChecked() {
    this.scrollToBottom();
  };

  scrollToBottom() {
    this.content.scrollToBottom(500);
  };

}
