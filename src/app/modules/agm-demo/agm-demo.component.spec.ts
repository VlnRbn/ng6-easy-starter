import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgmDemoComponent } from './agm-demo.component';

describe('AgmDemoComponent', () => {
  let component: AgmDemoComponent;
  let fixture: ComponentFixture<AgmDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgmDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgmDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
