import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyconnectionComponent } from './myconnection.component';

describe('MyconnectionComponent', () => {
  let component: MyconnectionComponent;
  let fixture: ComponentFixture<MyconnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyconnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyconnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
