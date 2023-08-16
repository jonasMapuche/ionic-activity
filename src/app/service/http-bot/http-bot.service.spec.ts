import { TestBed } from '@angular/core/testing';

import { HttpBotService } from './http-bot.service';

describe('HttpBotService', () => {
  let service: HttpBotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpBotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
