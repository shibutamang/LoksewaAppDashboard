import { TestBed } from '@angular/core/testing';

import { GkService } from '../gk.service';

describe('GkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GkService = TestBed.get(GkService);
    expect(service).toBeTruthy();
  });
});
