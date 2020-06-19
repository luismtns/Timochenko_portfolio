import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { VideoPlayerModule } from './../../components/video-player/video-player.module';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
import { interval } from 'rxjs';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit, OnDestroy  {
  @ViewChild('photo_container') photoDivRef: ElementRef;
  @ViewChild('slickModal') slickModal: SlickCarouselComponent
  @ViewChild('slickModal2') slickModal2: SlickCarouselComponent
  pink_text_effect: boolean = false;
  destroy_slick:boolean = true;

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
        slidesToScroll: 2.5,
        "centerMode": true,
        autoplay: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1.5,
        "centerMode": true,
        autoplay: true,
      }
    }
  ]
  
  slideConfig = {
    "speed": 1000,
    "slidesToShow": 4.5, 
    "slidesToScroll": 1, 
    "centerMode": true,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 0,
    "cssEase": 'linear',
    // "responsive": this.responsive_slides,
  };
  slideConfig_2 = {
    "speed": 1000,
    "slidesToShow": 4.5, 
    "slidesToScroll": 4.5,
    "centerMode": true,
    "infinite": true,
    "autoplay": false,
    "cssEase": 'linear',
    // "responsive": this.responsive_slides,
  };
  reverseAutoplay:boolean = true;
  handle_reverseAutoplay:any;
  constructor(
    private SlickCarouselModule:SlickCarouselModule
  ) { }

  ngOnInit(): void {
    this.introEffect();
    this.handle_reverseAutoplay = interval(0);
      this.handle_reverseAutoplay.subscribe(n=>{
        if(this.slickModal2){
          if (!this.reverseAutoplay) return;
          this.slickModal2.slickPrev();
        }
      });
  }
  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.destroy_slick = false;
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
