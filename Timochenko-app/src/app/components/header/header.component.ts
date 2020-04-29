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
    
    setTimeout(()=>{this.loaderService.hide();}, 100)
    
  }

}
