import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VideoPlayerModule } from './../../components/video-player/video-player.module';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  @ViewChild('photo_container') photoDivRef: ElementRef;
  @ViewChild('slickModal') slickModal: SlickCarouselComponent
  @ViewChild('slickModal2') slickModal2: SlickCarouselComponent
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
      'name':'chill',
      'alt':'Chill White Logo',
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

  responsive_slides:any = [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 2,
        "centerMode": true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        "centerMode": true,
      }
    }
  ]
  
  slideConfig = {
    "speed": 300,
    "slidesToShow": 4.5, 
    "slidesToScroll": 3, 
    "centerMode": true,
    "infinite": true,
    "autoplay": false,
    "cssEase": "cubic-bezier(.35,0,.28,1)",
    "responsive": this.responsive_slides,
  };
  slideConfig_2 = {
    "speed": 300,
    "slidesToShow": 4.5, 
    "slidesToScroll": 3,
    "centerMode": true,
    "infinite": true,
    "autoplay": false,
    "cssEase": "cubic-bezier(.35,0,.28,1)",
    "responsive": this.responsive_slides,
  };

  constructor() { }

  ngOnInit(): void {
    this.introEffect();
    window.setInterval(()=>{
      this.slickModal.slickNext();
      this.slickModal2.slickPrev();
    }, 2000)
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
