import { Component, AfterViewInit } from '@angular/core';
import { PageModule } from 'src/app/components/page-header/page/page.module';
import { NgsRevealConfig } from 'ngx-scrollreveal';
import { myNgsRevealConfig } from '../ngsRevealConfig';

@Component({
  selector: 'app-chill-page',
  templateUrl: './chill-page.component.html',
  styleUrls: ['./chill-page.component.scss']
})
export class ChillPageComponent implements AfterViewInit {
  _page:PageModule = {
    "title": "Chill.fy",
    "subTitle": "Creative Direction",
    "imgSrc": "chill/Chillfy",
    "imgAlt": "Chill.fy project cover",
  }
  
  _ngsReveal:NgsRevealConfig  = myNgsRevealConfig;
  constructor() { }

  ngAfterViewInit(): void {
  }

}
