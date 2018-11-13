import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateroomComponent } from './stateroom.component';

describe('StateroomComponent', () => {
  let component: StateroomComponent;
  let fixture: ComponentFixture<StateroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
