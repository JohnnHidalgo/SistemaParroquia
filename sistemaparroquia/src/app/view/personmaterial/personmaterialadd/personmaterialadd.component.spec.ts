import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonmaterialaddComponent } from './personmaterialadd.component';

describe('PersonmaterialaddComponent', () => {
  let component: PersonmaterialaddComponent;
  let fixture: ComponentFixture<PersonmaterialaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonmaterialaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonmaterialaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
