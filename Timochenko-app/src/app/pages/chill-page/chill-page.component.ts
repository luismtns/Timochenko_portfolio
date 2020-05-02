import { Component, OnInit } from '@angular/core';
import { PageModule } from 'src/app/components/page-header/page/page.module';
import { NgsRevealConfig } from 'ngx-scrollreveal';
import { myNgsRevealConfig } from '../ngsRevealConfig';
import { VideoPlayerModule } from 'src/app/components/video-player/video-player.module';

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
  
  video_1:VideoPlayerModule = {
    'src': 'chill/desk_vid_1',
    'poster': 'chill/cover_desk_vid_1',
    'autoplay': true
  }

  video_2:VideoPlayerModule = {
    'src': 'chill/desk_vid_2',
    'poster': 'chill/cover_desk_vid_2',
    'autoplay': true
  }
  
  _ngsReveal:NgsRevealConfig  = myNgsRevealConfig;
  constructor() { }

  ngOnInit(): void {
  }

}
