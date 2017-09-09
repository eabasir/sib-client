import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldierInfoFormComponent } from './soldier-info-form.component';

describe('SoldierInfoFormComponent', () => {
  let component: SoldierInfoFormComponent;
  let fixture: ComponentFixture<SoldierInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoldierInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldierInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
