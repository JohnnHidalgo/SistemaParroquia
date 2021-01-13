import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialeditComponent } from './materialedit.component';

describe('MaterialeditComponent', () => {
  let component: MaterialeditComponent;
  let fixture: ComponentFixture<MaterialeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
