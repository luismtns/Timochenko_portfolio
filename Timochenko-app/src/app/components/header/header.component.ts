import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { LoaderService } from 'src/app/services/loader.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  year:string;
  pink_transition: object = {
    'pink-transition': true,
    'fade-in': false,
    'fade-out': false
  };

  constructor(
    private loaderService: LoaderService,
    private router:Router,
    private _location: Location
    ) { }

  ngOnInit(): void {
    this.year = moment().format("YYYY");
  }

  goHome(){
    if(this.router.url.indexOf('/p/') > -1){
      var route_split = location.pathname.split('/')
      var route_navigate = route_split[route_split.length - 1];
      if(route_navigate == 'Chill'){
        route_navigate = ''
      }
      this.router.navigate(['/'+route_navigate])
    }else{
      this.router.navigate(['/'])
    }
    this.pinkTransition();
    setTimeout(()=>{this.loaderService.hide();}, 100)
    
  }
  
  pinkTransition(){
    this.pink_transition['fade-in'] = true;
    setTimeout(()=>{
      this.pink_transition['fade-in'] = false;
      this.pink_transition['fade-out'] = true;
      setTimeout(()=>{
        this.pink_transition['fade-out'] = false;
      }, 400)
    }, 600)
  }

}
