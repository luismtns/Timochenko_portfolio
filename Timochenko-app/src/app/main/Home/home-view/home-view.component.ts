import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  time_seconds:number = 12;
  // time_seconds:number = 0;
  point_list: any;
  point_interval:any;
  pink_text:boolean = false;
  constructor(private loaderService: LoaderService) { 
  }

  ngOnInit(): void {
    timer(this.time_seconds * 1000).subscribe(val =>{
      this.loaderService.hide();
    });

    this.runPoints();
    this.point_interval = setInterval(() => {
      this.runPoints(); 
    }, 800);

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
