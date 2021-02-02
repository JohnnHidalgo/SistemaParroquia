import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatequesislistComponent } from './catequesislist.component';

describe('CatequesislistComponent', () => {
  let component: CatequesislistComponent;
  let fixture: ComponentFixture<CatequesislistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatequesislistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatequesislistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
