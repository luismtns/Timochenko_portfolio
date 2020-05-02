import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { PageModule } from 'src/app/components/page-header/page/page.module';
import { VideoPlayerModule } from 'src/app/components/video-player/video-player.module';
import { NgsRevealConfig } from 'ngx-scrollreveal';
import { myNgsRevealConfig } from '../ngsRevealConfig';

@Component({
  selector: 'app-lit-page',
  templateUrl: './lit-page.component.html',
  styleUrls: ['./lit-page.component.scss']
})
export class LitPageComponent implements AfterViewInit {

  _page:PageModule = {
    "title": "Lit",
    "subTitle": "Motion & Sound Design",
    "imgSrc": "lit/Lit",
    "imgAlt": "Lit project cover",
  }

  _config:VideoPlayerModule = {
    'src': 'lit/lit_video',
    'poster': 'lit/Lit'
  }
  
  _ngsReveal:NgsRevealConfig  = myNgsRevealConfig;
  constructor() { }

  ngAfterViewInit(): void {
  }

}
