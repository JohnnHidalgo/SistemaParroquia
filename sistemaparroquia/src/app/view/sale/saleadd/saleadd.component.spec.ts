import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleaddComponent } from './saleadd.component';

describe('SaleaddComponent', () => {
  let component: SaleaddComponent;
  let fixture: ComponentFixture<SaleaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
