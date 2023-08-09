import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent  implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {}

  gotoHomePage() {
    this.navCtrl.navigateForward('home');
  }

}
