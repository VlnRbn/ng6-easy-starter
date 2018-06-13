import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormArrayComponent } from './demo-form-array.component';

describe('DemoFormArrayComponent', () => {
  let component: DemoFormArrayComponent;
  let fixture: ComponentFixture<DemoFormArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
