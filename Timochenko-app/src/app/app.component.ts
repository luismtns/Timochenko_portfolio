import { Component, HostListener } from '@angular/core';
import { ScreenHoverService } from './services/screen-hover.service';
import { LoaderState } from './loader/loader.model';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mouse_position: MouseEvent;
  mouse_active: boolean = false;
  pointer_click: boolean = false;
  show:boolean = false;
  constructor(private loaderService:LoaderService){
    
    this.loaderService.loaderState
    .subscribe((state: LoaderState) => {
      this.show = state.show;
    });
  }
  @HostListener('mousemove', ['$event'])
  mouseMove($event: MouseEvent) {
    this.mouse_active = true;
    this.mouse_position = $event

  }
  @HostListener('mouseleave', ['$event'])
  mouseLeave($event: MouseEvent) {
    this.mouse_active = false
  }
  @HostListener('pointerdown', ['$event'])
  PointerDown(evento: WheelEvent) {
    this.pointer_click = true;
  }
  @HostListener('pointerup', ['$event'])
  PointerUp(evento: PointerEvent) {
    this.pointer_click = false;
  }
  
}
