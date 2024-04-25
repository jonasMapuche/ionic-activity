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

  public newdata: any[] = [];
  
  constructor(
    public navCtrl: NavController,
    private httpActivity: HttpActivityService) {}

  ngOnInit() {

    /*
    function filterByFramework(obj: any) {
      if (obj == "speed") {
        return true;
      } else {
        return false;
      }
    }
    */

    function filterByName(obj: any) {
      if (obj.name == "speed" || obj.name == "amperes" || obj.name == "lift coefficient") {
        return true;
      } else {
        return false;
      }
    }
    

    this.httpActivity.getFramework("lift").subscribe(index => {
      index.filter(filterByName).forEach(index2 => {
        const obj = {
          name: index2.name
        };
        this.data.push(obj);
      });
    });

    this.httpActivity.getFramework("power").subscribe(index => {
      index.filter(filterByName).forEach(index2 => {
        const obj = {
          name: index2.name
        };
        this.data.push(obj);
      });
    });

    this.newdata.push(this.data.filter( index => (index.name=="amperes" || index.name=="speed")));

  };


  public alertSetting = [
    {
      text: 'Setting',
      handler: () => {
        this.navCtrl.navigateForward('setting');
      }
    }
  ];

  gotoBotComponent() {
    this.navCtrl.navigateForward('bot/null');
  };

  gotoButtonBotComponent(button: string) {
    this.navCtrl.navigateForward('bot/'+button);
  };

}
