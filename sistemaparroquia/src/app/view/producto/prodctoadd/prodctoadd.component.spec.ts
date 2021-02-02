import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdctoaddComponent } from './prodctoadd.component';

describe('ProdctoaddComponent', () => {
  let component: ProdctoaddComponent;
  let fixture: ComponentFixture<ProdctoaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdctoaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdctoaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
