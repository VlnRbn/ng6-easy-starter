import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-carousel',
  templateUrl: './demo-carousel.component.html',
  styleUrls: ['./demo-carousel.component.css']
})
export class DemoCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  images = [
    'assets/one.jpg',
    'assets/two.jpeg',
    'assets/four.jpg',
    'assets/five.jpg',
  ];

}
