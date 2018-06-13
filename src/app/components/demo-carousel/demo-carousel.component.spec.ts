import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCarouselComponent } from './demo-carousel.component';

describe('DemoCarouselComponent', () => {
  let component: DemoCarouselComponent;
  let fixture: ComponentFixture<DemoCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
