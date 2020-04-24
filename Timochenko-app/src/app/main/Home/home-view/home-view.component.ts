import { Component, OnInit , ElementRef, ViewChild, HostListener } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';
import { timer, Subscription } from 'rxjs';
import * as moment from 'moment';
import { ScreenHoverService } from 'src/app/services/screen-hover.service';
import { ScreenState } from 'src/app/services/screenHover.model';
import { Router } from '@angular/router';
import { slideInAnimation } from '../../route-animation';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
  animations: [ slideInAnimation ]
})
export class HomeViewComponent implements OnInit  {

  point_list: any;
  point_interval:any;
  pink_text:boolean = false;

  year:string;
  mouse_X_position: number = 0;
  mouse_Y_position: number = 0;
  subscriptions: Subscription;

  project = 1;
  constructor(
    private loaderService: LoaderService,
    private ScreenService: ScreenHoverService,
    private router: Router
    ) { 
  }
  @HostListener('document:mousewheel', ['$event'])
  onWheelScroll(evento: WheelEvent) {
    // Scroll down
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

  ngOnInit (): void {
    this.year = moment().format("YYYY")
    this.runPoints();
    this.point_interval = setInterval(() => {
      this.runPoints(); 
    }, 800);
    
    this.subscriptions = this.ScreenService.screenStatus.subscribe((status:ScreenState)=>{
      this.mouse_X_position = status.x
      this.mouse_Y_position = status.y
    })

  }

  ngOnDestroy():void{
    clearInterval( this.point_interval)
    this.loaderService.hide();
    this.subscriptions.unsubscribe();
  }

  runPoints() {
    if(!this.point_list){
      this.point_list = ['.']
    }
    if(this.point_list.length < 3){
      this.point_list.push('.')
      this.pink_text = false;
    }else{
      this.point_list = []
      this.pink_text = true;
    }
  }
}
