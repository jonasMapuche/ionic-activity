import { TestBed } from '@angular/core/testing';

import { HttpActivityService } from './http-activity.service';

describe('HttpActivityService', () => {
  let service: HttpActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
