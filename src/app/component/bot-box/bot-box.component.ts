import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bot-box',
  templateUrl: './bot-box.component.html',
  styleUrls: ['./bot-box.component.scss'],
})
export class BotBoxComponent  implements OnInit {

  @Input() chat: any;
  @Input() current_user_id: any;
  
  constructor() { }

  ngOnInit() {}

}
