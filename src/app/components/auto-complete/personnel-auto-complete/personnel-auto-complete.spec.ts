import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelAutoCompleteComponent } from './personnel-auto-complete';

describe('PersonnelAutoCompleteComponent', () => {
  let component: PersonnelAutoCompleteComponent;
  let fixture: ComponentFixture<PersonnelAutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnelAutoCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
