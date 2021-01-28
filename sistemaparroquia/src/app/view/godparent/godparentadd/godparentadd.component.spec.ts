import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodparentaddComponent } from './godparentadd.component';

describe('GodparentaddComponent', () => {
  let component: GodparentaddComponent;
  let fixture: ComponentFixture<GodparentaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GodparentaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GodparentaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
