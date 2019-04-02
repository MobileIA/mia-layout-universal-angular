import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarWithoutTopbarComponent } from './sidebar-without-topbar.component';

describe('SidebarWithoutTopbarComponent', () => {
  let component: SidebarWithoutTopbarComponent;
  let fixture: ComponentFixture<SidebarWithoutTopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarWithoutTopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarWithoutTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
