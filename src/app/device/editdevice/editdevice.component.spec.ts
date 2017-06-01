import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdeviceComponent } from './editdevice.component';

describe('EditdeviceComponent', () => {
  let component: EditdeviceComponent;
  let fixture: ComponentFixture<EditdeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
