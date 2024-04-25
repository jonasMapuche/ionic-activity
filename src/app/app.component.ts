import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor() {}

  public appPages = [
    { title: 'Home', url: '/', icon: 'home' },
    { title: 'Bot', url: '/bot/null', icon: 'man' }
  ];

}
