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
  animate_roll:number = 0;
  mouse_X_position: number = 0;
  mouse_Y_position: number = 0;

  subscriptions: Subscription;
  page_count: Object[] = [
    {
      name: '/',
      number:1,
      position: '0em',
    },
    {
      name: '/Lit',
      number:2,
      position: '-2em',
    },
    {
      name: '/Reebok',
      number:3,
      position: '-4em',
    },
    {
      name: '/Senna',
      number:4,
      position: '-6em',
    },
    {
      name: '/Palmeiras',
      number:5,
      position: '-8em',
    },
  ];
  top_number_cont:string = '0em'
  constructor(
    private loaderService: LoaderService,
    private router: Router
    ) { 
  }
  @HostListener('window:mousewheel', ['$event'])
  @debounce(150)
  onWheelScroll(evento: WheelEvent) {
    console.log('scrolling')
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
    
    setTimeout(() => {this.animate_line = true;}, 800);
    setTimeout(() => {this.getNumberPosition(this.router.url)}, 200);
  }

  ngOnDestroy():void{
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
          this.router.navigate(['/Lit'])
          break
        }
        case '/Lit': {
          this.router.navigate(['/Reebok'])
          break
        }
        case '/Reebok': {
          this.router.navigate(['/Senna'])
          break
        }
        case '/Senna': {
          this.router.navigate(['/Palmeiras'])
          break
        }
        case '/Palmeiras': {
          this.router.navigate(['/'])
          break
        }
      }
    } else { // Scroll up
      switch (this.router.url) {
        case '/': {
          this.router.navigate(['/Palmeiras'])
          break
        }
        case '/Lit': {
          this.router.navigate(['/'])
          break
        }
        case '/Reebok': {
          this.router.navigate(['/Lit'])
          break
        }
        case '/Senna': {
          this.router.navigate(['/Reebok'])
          break
        }
        case '/Palmeiras': {
          this.router.navigate(['/Senna'])
          break
        }
      }
    }
    setTimeout(() => {
      this.getNumberPosition(this.router.url);
    }, 200);
    this.animate_roll += 90;
  }

  getNumberPosition(page){
    var select_page = this.page_count.find(e=>e['name'] == page)
    var top_em = select_page['position']
    this.top_number_cont = top_em;
  }
}
