import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() images:Object[]= [];
  @Input() reverse:boolean = false;
  @Input() config: SwiperConfigInterface;

  @ViewChild('swiperEl') swiperEl: ElementRef;

  constructor() { 
  }

  ngOnInit(): void {
    this.config ={
      autoplay:   {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: this.reverse
      }, // Autoplay option having value in milliseconds
      initialSlide: 0, // Slide Index Starting from 0
      slidesPerView: 4.5, // Slides Visible in Single View Default is 1
      pagination: false, // Pagination Class defined
      spaceBetween: 200, // Space between each Item
      speed: 1500,
      "loop": true,
      direction: "horizontal",
      breakpoints: {
        // when window width is >= 640px
        0: {
          slidesPerView: 2.5,
          spaceBetween: 80
        },
        600: {
          slidesPerView: 3.5,
          spaceBetween: 100
        },
        1024: {
          slidesPerView: 4.5,
          spaceBetween: 200
        },
        1440: {
          slidesPerView: 4.5,
          spaceBetween: 250
        },
      }
    };
  }

  onSwiperHover( hover: boolean ) {
    if ( hover ) {
      this.swiperEl.nativeElement.swiper.autoplay.stop();
    } else {
      this.swiperEl.nativeElement.swiper.autoplay.start();
    }
  }


}
