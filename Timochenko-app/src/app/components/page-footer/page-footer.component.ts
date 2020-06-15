import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private route:Router
  ) { }

  ngOnInit(): void {
  }
  @HostListener('document:mousemove', ['$event'])
  mouseMove($event: MouseEvent) {
    this.mouse_top = $event.clientY - 140
    this.mouse_left = $event.clientX - 120
  }
  // @HostListener('pointerdown', ['$event'])
  // PointerDown(evento: WheelEvent) {
  // }

  openRoute(){
    this.pointer_click = true;
    setTimeout(()=> this.route.navigate([this.pageLink]),300)
  }

}
