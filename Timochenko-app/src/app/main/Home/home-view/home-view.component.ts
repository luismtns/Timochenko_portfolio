import { Component, OnInit , ElementRef, ViewChild } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';
import { timer } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit  {

  point_list: any;
  point_interval:any;
  pink_text:boolean = false;

  constructor(private loaderService: LoaderService) { 
  }

  ngOnInit (): void {

    this.runPoints();
    this.point_interval = setInterval(() => {
      this.runPoints(); 
    }, 800);

  }

  ngOnDestroy():void{
    clearInterval( this.point_interval)
    this.loaderService.hide();
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
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
