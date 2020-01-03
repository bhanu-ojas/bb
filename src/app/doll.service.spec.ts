import { TestBed } from '@angular/core/testing';

import { DollService } from './doll.service';

describe('DollService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DollService = TestBed.get(DollService);
    expect(service).toBeTruthy();
  });
});
