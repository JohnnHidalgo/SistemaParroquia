import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatequesisaddComponent } from './catequesisadd.component';

describe('CatequesisaddComponent', () => {
  let component: CatequesisaddComponent;
  let fixture: ComponentFixture<CatequesisaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatequesisaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatequesisaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
