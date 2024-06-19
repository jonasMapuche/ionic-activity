import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpActivityService } from '../service/http-activity/http-activity.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public data: any[] = [];

  constructor(
    public navCtrl: NavController,
    private httpActivity: HttpActivityService) {}

  ngOnInit() {

    this.httpActivity.getFramework("lift").subscribe(index => {
      index.forEach(index2 => {
        const obj = {
          name: index2.name
        };
        this.data.push(obj);
      });
    });

    this.httpActivity.getFramework("power").subscribe(index => {
      index.forEach(index2 => {
        const obj = {
          name: index2.name
        };
        this.data.push(obj);
      });
    });

  };

  public alertSetting = [
    {
      text: 'Setting',
      handler: () => {
        this.navCtrl.navigateForward('setting');
      }
    }
  ];

  search(art: any[]) {
    return art.filter((obj)=>(obj.name == "speed" || obj.name == "amperes" || obj.name == "lift coefficient"));
  };

  gotoBotComponent() {
    this.navCtrl.navigateForward('bot/null');
  };

  gotoButtonBotComponent(button: string) {
    this.navCtrl.navigateForward('bot/'+button);
  };

}
