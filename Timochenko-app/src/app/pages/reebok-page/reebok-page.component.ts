import { Component, OnInit } from '@angular/core';
import { PageModule } from 'src/app/components/page-header/page/page.module';
import { VideoPlayerModule } from 'src/app/components/video-player/video-player.module';

@Component({
  selector: 'app-reebok-page',
  templateUrl: './reebok-page.component.html',
  styleUrls: ['./reebok-page.component.scss']
})
export class ReebokPageComponent implements OnInit {
  _page:PageModule = {
    "title": "Reebok",
    "subTitle": "Art Direction",
    "imgSrc": "reebok/Reebok_cover",
    "imgAlt": "Reebok project cover",
  }

  video_1:VideoPlayerModule = {
    'src': 'reebok/vid_1',
    'poster': 'reebok/cover_vid_1',
    'autoplay': true
  }

  video_2:VideoPlayerModule = {
    'src': 'reebok/vid_2',
    'poster': 'reebok/cover_vid_2',
    'autoplay': true
  }

  video_3:VideoPlayerModule = {
    'src': 'reebok/vid_3',
    'poster': 'reebok/cover_vid_3',
    'autoplay': true
  }
  
  video_4:VideoPlayerModule = {
    'src': 'reebok/vid_4',
    'poster': 'reebok/cover_vid_4',
    'autoplay': true
  }
  
  video_5:VideoPlayerModule = {
    'src': 'reebok/vid_5',
    'poster': 'reebok/cover_vid_5',
    'autoplay': true
  }
  
  video_6:VideoPlayerModule = {
    'src': 'reebok/vid_6',
    'poster': 'reebok/cover_vid_6',
    'autoplay': true
  }
  
  video_7:VideoPlayerModule = {
    'src': 'reebok/vid_7',
    'poster': 'reebok/cover_vid_7',
    'autoplay': true
  }
  
  video_8:VideoPlayerModule = {
    'src': 'reebok/vid_8',
    'poster': 'reebok/cover_vid_8',
    'autoplay': true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
