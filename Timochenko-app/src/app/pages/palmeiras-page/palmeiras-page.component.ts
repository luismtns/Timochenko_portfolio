import { Component, OnInit } from '@angular/core';
import { PageModule } from 'src/app/components/page-header/page/page.module';
import {NgsRevealConfig} from 'ngx-scrollreveal';

@Component({
  selector: 'app-palmeiras-page',
  templateUrl: './palmeiras-page.component.html',
  styleUrls: ['./palmeiras-page.component.scss']
})
export class PalmeirasPageComponent implements OnInit {
  _page:PageModule = {
    "title": "Palmeiras",
    "subTitle": "Ui & Art Direction",
    "imgSrc": "palmeiras/Palmeiras_cover",
    "imgAlt": "Palmeiras project cover",
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
