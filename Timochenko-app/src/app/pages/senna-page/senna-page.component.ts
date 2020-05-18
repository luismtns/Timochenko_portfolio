import { Component, OnInit } from '@angular/core';
import { PageModule } from 'src/app/components/page-header/page/page.module';
import { VideoPlayerModule } from 'src/app/components/video-player/video-player.module';

@Component({
  selector: 'app-senna-page',
  templateUrl: './senna-page.component.html',
  styleUrls: ['./senna-page.component.scss']
})
export class SennaPageComponent implements OnInit {
  _page:PageModule = {
    "title": "Senna",
    "subTitle": "Art Direction & Motion Design",
    "imgSrc": "senna/Senna_cover",
    "imgAlt": "Senna project cover",
  }

  video_1:VideoPlayerModule = {
    'src': 'senna/vid_1',
    'poster': 'senna/cover_vid_1',
    'autoplay': true
  }

  video_2:VideoPlayerModule = {
    'src': 'senna/vid_2',
    'poster': 'senna/cover_vid_2',
    'autoplay': true
  }

  video_3:VideoPlayerModule = {
    'src': 'senna/vid_3',
    'poster': 'senna/cover_vid_3',
    'autoplay': true
  }

  video_4:VideoPlayerModule = {
    'src': 'senna/vid_4',
    'poster': 'senna/cover_vid_4',
    'autoplay': true
  }

  video_5:VideoPlayerModule = {
    'src': 'senna/vid_5',
    'poster': 'senna/cover_vid_5',
    'autoplay': true
  }

  video_6:VideoPlayerModule = {
    'src': 'senna/vid_6',
    'poster': 'senna/cover_vid_6',
    'autoplay': true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
