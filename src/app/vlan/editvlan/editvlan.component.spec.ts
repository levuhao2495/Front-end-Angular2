import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvlanComponent } from './editvlan.component';

describe('EditvlanComponent', () => {
  let component: EditvlanComponent;
  let fixture: ComponentFixture<EditvlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditvlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditvlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
