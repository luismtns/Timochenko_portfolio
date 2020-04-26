import { Component, HostListener } from '@angular/core';
import { ScreenHoverService } from './services/screen-hover.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mouse_position: MouseEvent;
  mouse_active: boolean = false;
  constructor(private ScreenService:ScreenHoverService){}
  @HostListener('mousemove', ['$event'])
  mouseMove($event: MouseEvent) {
    this.mouse_active = true;
    this.mouse_position = $event

  }
  @HostListener('mouseleave', ['$event'])
  mouseLeave($event: MouseEvent) {
    this.mouse_active = false

  }
}
