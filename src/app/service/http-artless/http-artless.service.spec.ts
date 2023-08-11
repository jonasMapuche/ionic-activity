import { TestBed } from '@angular/core/testing';

import { HttpArtlessService } from './http-artless.service';

describe('HttpArtlessService', () => {
  let service: HttpArtlessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpArtlessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
