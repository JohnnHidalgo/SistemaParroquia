import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleviewComponent } from './saleview.component';

describe('SaleviewComponent', () => {
  let component: SaleviewComponent;
  let fixture: ComponentFixture<SaleviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
