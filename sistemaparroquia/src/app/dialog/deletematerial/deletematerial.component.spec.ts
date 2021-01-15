import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletematerialComponent } from './deletematerial.component';

describe('DeletematerialComponent', () => {
  let component: DeletematerialComponent;
  let fixture: ComponentFixture<DeletematerialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletematerialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletematerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
