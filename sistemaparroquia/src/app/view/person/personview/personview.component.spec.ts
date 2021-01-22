import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonviewComponent } from './personview.component';

describe('PersonviewComponent', () => {
  let component: PersonviewComponent;
  let fixture: ComponentFixture<PersonviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
