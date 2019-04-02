import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxBusinessOneComponent } from './box-business-one.component';

describe('BoxBusinessOneComponent', () => {
  let component: BoxBusinessOneComponent;
  let fixture: ComponentFixture<BoxBusinessOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxBusinessOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxBusinessOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
