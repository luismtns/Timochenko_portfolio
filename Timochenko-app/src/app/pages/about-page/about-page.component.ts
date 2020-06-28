import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VideoPlayerModule } from './../../components/video-player/video-player.module';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit  {
  @ViewChild('photo_container') photoDivRef: ElementRef;
  pink_text_effect: boolean = false;

  video_1:VideoPlayerModule = {
    'src': 'about/pink_lines',
    'poster': 'about/cover_pink_lines',
    'autoplay': true
  }

  logo_list:Object[] = [
    {
      'name':'avon',
      'alt':'Avon White Logo',
    },
    {
      'name':'bradesco',
      'alt':'Bradesco White Logo',
    },
    {
      'name':'casa_santa_luiza',
      'alt':'Casa Santa Luiza White Logo',
    },
    {
      'name':'heineken',
      'alt':'Heineken White Logo',
    },
    {
      'name':'hershey',
      'alt':'Hershey White Logo',
    },
    {
      'name':'instituto_ayrton_senna',
      'alt':'Instituto Ayrton Senna White Logo',
    },
    {
      'name':'lit',
      'alt':'Lit White Logo',
    },
    {
      'name':'reebok',
      'alt':'Reebok White Logo',
    },
    {
      'name':'saintpaul',
      'alt':'Saint Paul White Logo',
    },
    {
      'name':'udacity',
      'alt':'Udacity White Logo',
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.introEffect();
  }
  
  introEffect(){
    setTimeout(() => {
      this.photoDivRef.nativeElement.style.width = '360px'
      setTimeout(() => {
        this.photoDivRef.nativeElement.style.width = '2px'      
      }, 1000);
    }, 2600);
  }

}
