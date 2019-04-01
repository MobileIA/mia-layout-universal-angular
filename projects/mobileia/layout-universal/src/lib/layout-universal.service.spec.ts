import { TestBed } from '@angular/core/testing';

import { LayoutUniversalService } from './layout-universal.service';

describe('LayoutUniversalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LayoutUniversalService = TestBed.get(LayoutUniversalService);
    expect(service).toBeTruthy();
  });
});
