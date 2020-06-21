import { Component, OnInit, Input, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MouseStyleService } from './../../services/mouse-style.service';
import { debounce } from './../../decorators/debounce.decorator';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss']
})
export class PageFooterComponent implements OnInit {
  @Input() pageName:string;
  @Input() pageLink:string;
  @Input() pageBgLink:string;
  
  mouse_top: number = 0;
  mouse_left: number = 0;
  mouse_active: boolean = false;
  pointer_click: boolean = false;

  @ViewChild('item') item: ElementRef;
  animate_class:boolean=false;
  constructor(
    private route:Router,
    private _MouseStyleService:MouseStyleService
  ) { }

  ngOnInit(): void {
  }
  @HostListener('document:mousemove', ['$event'])
  mouseMove($event: MouseEvent) {
    this.mouse_top = $event.clientY - 140
    this.mouse_left = $event.clientX - 120
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {    
    if(this.item.nativeElement.getBoundingClientRect().top < window.innerHeight){
      this.animate_class = true;
    }
  }

  openRoute(){
    this.pointer_click = true;
    this._MouseStyleService.show();
    setTimeout(()=> this.route.navigate([this.pageLink]),300)
  }
  mouseOverFooter(){
    this.mouse_active = true;
    this._MouseStyleService.hide();
  }
  mouseLeaveFooter(){
    this.mouse_active = false
    this._MouseStyleService.show();
  }

}
