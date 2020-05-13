import { Component, OnInit, ElementRef, ViewChild, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-reveal-scroll',
  templateUrl: './reveal-scroll.component.html',
  styleUrls: ['./reveal-scroll.component.scss']
})
export class RevealScrollComponent implements OnInit {

  @ViewChild('item') item: ElementRef;
  animate_class:boolean=false;
  
  @Input() delay:string = '0s';

  constructor() { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log('posit', this.item.nativeElement.getBoundingClientRect().top);
    console.log('window.innerHeight', window.innerHeight);
    
    if(this.item.nativeElement.getBoundingClientRect().top < window.innerHeight){
      this.animate_class = true;
    }
    // if (this.video_element.nativeElement.getBoundingClientRect().top) {
    //   document.getElementById('subTitle').classList.add('red');
    //   document.getElementById('paragraph').classList.add('green');
    // }
  }

  ngOnInit(): void {
  }

}
