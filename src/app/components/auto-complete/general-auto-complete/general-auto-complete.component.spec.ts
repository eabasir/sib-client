import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAutoCompleteComponent } from './general-auto-complete.component';

describe('GeneralAutoCompleteComponent', () => {
  let component: GeneralAutoCompleteComponent;
  let fixture: ComponentFixture<GeneralAutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralAutoCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
