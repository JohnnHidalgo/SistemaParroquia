import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatequistalistComponent } from './catequistalist.component';

describe('CatequistalistComponent', () => {
  let component: CatequistalistComponent;
  let fixture: ComponentFixture<CatequistalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatequistalistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatequistalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
