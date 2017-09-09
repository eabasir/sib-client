import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBundleComponent } from './search-bundle.component';

describe('SearchBundleComponent', () => {
  let component: SearchBundleComponent;
  let fixture: ComponentFixture<SearchBundleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBundleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
