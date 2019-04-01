import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutUniversalComponent } from './layout-universal.component';

describe('LayoutUniversalComponent', () => {
  let component: LayoutUniversalComponent;
  let fixture: ComponentFixture<LayoutUniversalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutUniversalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutUniversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
