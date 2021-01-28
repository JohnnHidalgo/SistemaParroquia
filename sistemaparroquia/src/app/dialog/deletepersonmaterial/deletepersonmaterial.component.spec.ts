import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletepersonmaterialComponent } from './deletepersonmaterial.component';

describe('DeletepersonmaterialComponent', () => {
  let component: DeletepersonmaterialComponent;
  let fixture: ComponentFixture<DeletepersonmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletepersonmaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletepersonmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
