import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecatequesistypeComponent } from './deletecatequesistype.component';

describe('DeletecatequesistypeComponent', () => {
  let component: DeletecatequesistypeComponent;
  let fixture: ComponentFixture<DeletecatequesistypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecatequesistypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecatequesistypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
