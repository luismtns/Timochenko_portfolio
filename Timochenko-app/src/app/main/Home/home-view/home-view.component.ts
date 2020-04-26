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
import { LoaderState } from 'src/app/loader/loader.model';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
  animations: [ slideInAnimation ]
})
export class HomeViewComponent implements OnInit  {

  animate_line:boolean;
  mouse_X_position: number = 0;
  mouse_Y_position: number = 0;

  subscriptions: Subscription;

  constructor(
    private loaderService: LoaderService,
    private router: Router
    ) { 
  }
  @HostListener('document:mousewheel', ['$event'])
  @debounce(150)
  onWheelScroll(evento: WheelEvent) {
    
    if (evento.deltaY > 0) {// Scroll down
      this.routeControl(true)
    }else{// Scroll up  
      this.routeControl(false)
    }
  }
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // ArrowDown code = 40
    // ArrowUp code = 38
    if(event.keyCode == 40){
      this.routeControl(true)
    }else if(event.keyCode == 38){
      this.routeControl(false)
    }
  }

  ngOnInit (): void {
    
    this.subscriptions = this.loaderService.loaderState
    .subscribe((state: LoaderState) => {
      if(!state.show){
        setTimeout(() => {
          this.animate_line = true;
          
        }, 800);
      }
    });
  }

  ngOnDestroy():void{
    this.subscriptions.unsubscribe();
  }
  
  onSwipeUp($event){
    this.routeControl(true)
  }

  onSwipeDown($event){
    this.routeControl(false)
  }


  routeControl(scrolldown){    
    if (scrolldown) {
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
