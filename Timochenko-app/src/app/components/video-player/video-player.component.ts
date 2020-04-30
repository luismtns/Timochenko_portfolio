import { Component, OnInit, Input, Inject, HostListener, ElementRef, ViewChild } from '@angular/core';
import { VideoPlayerModule } from './video-player.module';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  @Input() config: VideoPlayerModule = {
    'poster': "",
    'src': ""
  }

  @ViewChild('vid') video_element: ElementRef;

  pink_effect: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if(this.video_element.nativeElement.getBoundingClientRect().top < window.innerHeight / 2){
      this.pink_effect = true;
    }
    // if (this.video_element.nativeElement.getBoundingClientRect().top) {
    //   document.getElementById('subTitle').classList.add('red');
    //   document.getElementById('paragraph').classList.add('green');
    // }
  }


  ngOnInit(): void {
  }

  
  toggleVideo($event){
    if($event.toElement.paused){
      $event.toElement.play();
    }else{
      $event.toElement.pause();
    }
  }

}
