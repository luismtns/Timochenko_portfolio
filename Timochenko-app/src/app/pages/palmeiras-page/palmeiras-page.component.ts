import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PageModule } from 'src/app/components/page-header/page/page.module';
import {NgsRevealConfig} from 'ngx-scrollreveal';
import { myNgsRevealConfig } from '../ngsRevealConfig';

@Component({
  selector: 'app-palmeiras-page',
  templateUrl: './palmeiras-page.component.html',
  styleUrls: ['./palmeiras-page.component.scss']
})
export class PalmeirasPageComponent implements AfterViewInit {
  _page:PageModule = {
    "title": "Palmeiras",
    "subTitle": "Ui & Art Direction",
    "imgSrc": "palmeiras/Palmeiras_cover",
    "imgAlt": "Palmeiras project cover",
  }
  
  _ngsReveal:NgsRevealConfig  = myNgsRevealConfig;

  constructor() { }

  ngAfterViewInit(): void {
  }

}
