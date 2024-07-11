import { TestBed } from '@angular/core/testing';

import { GererGynecologueService } from './gerer-gynecologue.service';

describe('GererGynecologueService', () => {
  let service: GererGynecologueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GererGynecologueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
