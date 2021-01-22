import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersondocumentaddComponent } from './persondocumentadd.component';

describe('PersondocumentaddComponent', () => {
  let component: PersondocumentaddComponent;
  let fixture: ComponentFixture<PersondocumentaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersondocumentaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersondocumentaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
