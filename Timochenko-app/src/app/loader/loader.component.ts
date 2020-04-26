import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { LoaderState } from './loader.model';
import { environment } from 'src/environments/environment';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

  time_seconds:number = 13; //13
  progress_percent:number = 0;
  show = true;

  pink_transition: object = {
    'pink-transition': true,
    'fade-in': false,
    'fade-out': false
  };

  imgs = new Array();

  private subscription: Subscription;
  constructor(
    private loaderService: LoaderService,
    private router: Router) { }
  ngOnInit() {
    this.pload(
      "./assets/images/pre_loader.jpg",
    "./assets/images/loader.gif");
    
  }
  pload(...args: any[]):void {
    for (var i = 0; i < args.length; i++) {
      this.imgs[i] = new Image();
      this.imgs[i].src = args[i];
      // console.log('loaded: ' + args[i]);
    }
  }
  runLoader(){    
    this.subscription = this.loaderService.loaderState
    .subscribe((state: LoaderState) => {
      this.show = state.show;
    });
    
    if(environment.production){
      const subscrive_timer = timer(1000, 1000).subscribe((val) =>{
        if(val > this.time_seconds){
          this.pinkTransition()
          setTimeout(()=>{this.loaderService.hide();}, 800)
          subscrive_timer.unsubscribe()
        }else{
          var progress_value = (val / this.time_seconds);
          if(progress_value > 1){
            progress_value = 1;
          }
          this.updateProgress(progress_value)
        }
        
      });

    }else{
      this.loaderService.hide();
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.loaderService.hide();
  }
  pinkTransition(){
    this.pink_transition['fade-in'] = true;
    setTimeout(()=>{
      this.pink_transition['fade-in'] = false;
      this.pink_transition['fade-out'] = true;
      setTimeout(()=>{this.pink_transition = null}, 800)
    }, 1000)
  }
  updateProgress (progressRatio) {
    this.progress_percent = Math.floor(progressRatio*100);
  };
}
