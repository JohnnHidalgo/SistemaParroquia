import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdctoeditComponent } from './prodctoedit.component';

describe('ProdctoeditComponent', () => {
  let component: ProdctoeditComponent;
  let fixture: ComponentFixture<ProdctoeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdctoeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdctoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
