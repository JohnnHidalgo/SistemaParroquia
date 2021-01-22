import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletepersondocumentComponent } from './deletepersondocument.component';

describe('DeletepersondocumentComponent', () => {
  let component: DeletepersondocumentComponent;
  let fixture: ComponentFixture<DeletepersondocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletepersondocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletepersondocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
