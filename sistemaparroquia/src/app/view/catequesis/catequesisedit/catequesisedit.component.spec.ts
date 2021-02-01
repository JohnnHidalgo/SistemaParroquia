import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatequesiseditComponent } from './catequesisedit.component';

describe('CatequesiseditComponent', () => {
  let component: CatequesiseditComponent;
  let fixture: ComponentFixture<CatequesiseditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatequesiseditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatequesiseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
