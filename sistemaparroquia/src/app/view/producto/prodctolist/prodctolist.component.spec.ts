import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdctolistComponent } from './prodctolist.component';

describe('ProdctolistComponent', () => {
  let component: ProdctolistComponent;
  let fixture: ComponentFixture<ProdctolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdctolistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdctolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
