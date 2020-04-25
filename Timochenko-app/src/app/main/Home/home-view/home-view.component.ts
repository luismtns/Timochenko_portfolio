import { Component, OnInit , ElementRef, ViewChild, HostListener } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';
import { timer, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import * as moment from 'moment';
import { ScreenHoverService } from 'src/app/services/screen-hover.service';
import { ScreenState } from 'src/app/services/screenHover.model';
import { Router } from '@angular/router';
import { slideInAnimation } from '../../route-animation';
import { debounce } from 'src/app/decorators/debounce.decorator';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
  animations: [ slideInAnimation ]
})
export class HomeViewComponent implements OnInit  {

  pink_text:boolean = false;
  year:string;
  mouse_X_position: number = 0;
  mouse_Y_position: number = 0;

  subscriptions: Subscription;

  constructor(
    private loaderService: LoaderService,
    private ScreenService: ScreenHoverService,
    private router: Router
    ) { 
  }
  @HostListener('document:mousewheel', ['$event'])
  @debounce(300)
  onWheelScroll(evento: WheelEvent) {
    // Scroll down
    this.routeControl(evento)
  }

  ngOnInit (): void {
    this.year = moment().format("YYYY");
    
    // Take Mouse Screen Position Real Time
    this.subscriptions = this.ScreenService.screenStatus.subscribe((status:ScreenState)=>{
      this.mouse_X_position = status.x
      this.mouse_Y_position = status.y
    })

  }

  ngOnDestroy():void{
    this.loaderService.hide();
    this.subscriptions.unsubscribe();
  }

  routeControl(evento){    
    console.log(evento.deltaY)
    if (evento.deltaY > 0) {
      switch (this.router.url) {
        case '/': {
          this.router.navigate(['/lit'])
          break
        }
        case '/lit': {
          this.router.navigate(['/reebok'])
          break
        }
        case '/reebok': {
          this.router.navigate(['/senna'])
          break
        }
        case '/senna': {
          this.router.navigate(['/palmeiras'])
          break
        }
      }
    } else { // Scroll up
      switch (this.router.url) {
        case '/': {
          break
        }
        case '/lit': {
          this.router.navigate(['/'])
          break
        }
        case '/reebok': {
          this.router.navigate(['/lit'])
          break
        }
        case '/senna': {
          this.router.navigate(['/reebok'])
          break
        }
        case '/palmeiras': {
          this.router.navigate(['/senna'])
          break
        }
      }
    }
  }

}
