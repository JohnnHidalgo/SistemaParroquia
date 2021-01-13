import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentaddComponent } from './documentadd.component';

describe('DocumentaddComponent', () => {
  let component: DocumentaddComponent;
  let fixture: ComponentFixture<DocumentaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
