import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  public alertSetting = [
    {
      text: 'Setting',
      handler: () => {
        this.navCtrl.navigateForward('setting');
      }
    }
  ];

  gotoBotComponent() {
    this.navCtrl.navigateForward('bot');
  }

}
