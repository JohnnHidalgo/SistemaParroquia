import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodparentlistComponent } from './godparentlist.component';

describe('GodparentlistComponent', () => {
  let component: GodparentlistComponent;
  let fixture: ComponentFixture<GodparentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GodparentlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GodparentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
