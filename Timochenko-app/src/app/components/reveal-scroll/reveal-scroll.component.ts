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
    if(this.item.nativeElement.getBoundingClientRect().top < window.innerHeight){
      this.animate_class = true;
    }
  }

  ngOnInit(): void {
  }

}
