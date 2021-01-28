import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteparentComponent } from './deleteparent.component';

describe('DeleteparentComponent', () => {
  let component: DeleteparentComponent;
  let fixture: ComponentFixture<DeleteparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
