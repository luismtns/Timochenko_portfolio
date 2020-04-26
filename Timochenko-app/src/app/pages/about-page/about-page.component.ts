import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  @ViewChild('photo_container') photoDivRef: ElementRef
  pink_text_effect: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.introEffect()
  }

  introEffect(){
    setTimeout(() => {
      this.photoDivRef.nativeElement.style.width = '360px'
      setTimeout(() => {
        this.photoDivRef.nativeElement.style.width = '2px'      
      }, 1000);
    }, 2600);
  }
  showPhoto(){
    console.log('show')
  }

}
