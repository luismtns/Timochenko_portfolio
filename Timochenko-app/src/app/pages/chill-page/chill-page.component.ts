import { Component, OnInit } from '@angular/core';
import { PageModule } from 'src/app/components/page-header/page/page.module';
import { NgsRevealConfig } from 'ngx-scrollreveal';

@Component({
  selector: 'app-chill-page',
  templateUrl: './chill-page.component.html',
  styleUrls: ['./chill-page.component.scss']
})
export class ChillPageComponent implements OnInit {
  _page:PageModule = {
    "title": "Chill.fy",
    "subTitle": "Creative Direction",
    "imgSrc": "chill/Chillfy",
    "imgAlt": "Chill.fy project cover",
  }
  
  _ngsReveal:NgsRevealConfig  = {
    'origin': 'top',
    'scale': 1,
    'easing': 'cubic-bezier(.35,0,.28,1)',
    'distance': '3em',
    'duration': 1000,
    'interval': 1000,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
