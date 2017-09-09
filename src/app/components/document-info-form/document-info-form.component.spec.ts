import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentInfoFormComponent } from './document-info-form.component';

describe('DocumentInfoFormComponent', () => {
  let component: DocumentInfoFormComponent;
  let fixture: ComponentFixture<DocumentInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
