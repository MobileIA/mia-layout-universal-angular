import { TestBed } from '@angular/core/testing';

import { LayoutSidebarService } from './layout-sidebar-service.service';

describe('LayoutSidebarServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LayoutSidebarService = TestBed.get(LayoutSidebarService);
    expect(service).toBeTruthy();
  });
});
