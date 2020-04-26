import { Component, HostListener } from '@angular/core';
import { ScreenHoverService } from './services/screen-hover.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private ScreenService:ScreenHoverService){}
  @HostListener('mousemove', ['$event'])
  mouseMove($event: MouseEvent) {
    this.ScreenService.update($event.clientX,$event.clientY)

  }
}
