import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentaddComponent } from './parentadd.component';

describe('ParentaddComponent', () => {
  let component: ParentaddComponent;
  let fixture: ComponentFixture<ParentaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
