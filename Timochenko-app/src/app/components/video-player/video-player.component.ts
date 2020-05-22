import { Component, AfterViewInit, Input, Inject, HostListener, ElementRef, ViewChild } from '@angular/core';
import { VideoPlayerModule } from './video-player.module';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements AfterViewInit {

  @Input() config: VideoPlayerModule = {
    'poster': "",
    'src': ""
  }
  @Input() pinkdisable:boolean=false;
  @Input() delay:string = '1s';
  

  @ViewChild('vid') video_element: ElementRef;

  pink_effect: boolean = false;
  show_animate:boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if(this.video_element.nativeElement.getBoundingClientRect().top < window.innerHeight){
      if(this.config.autoplay){
        this.show_animate = true;
        var _videoRef = this.video_element.nativeElement as HTMLVideoElement;
        _videoRef.muted = true;
        _videoRef.loop = true;
        _videoRef.play();
      }else{        
        this.pink_effect = true;
      }
    }
    // if (this.video_element.nativeElement.getBoundingClientRect().top) {
    //   document.getElementById('subTitle').classList.add('red');
    //   document.getElementById('paragraph').classList.add('green');
    // }
  }


  ngAfterViewInit(): void {
  }

  
  toggleVideo($event){
    if($event.toElement.paused){
      $event.toElement.play();
    }else{
      $event.toElement.pause();
    }
  }

}
