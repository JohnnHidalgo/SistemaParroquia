import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletegodparentComponent } from './deletegodparent.component';

describe('DeletegodparentComponent', () => {
  let component: DeletegodparentComponent;
  let fixture: ComponentFixture<DeletegodparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletegodparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletegodparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
