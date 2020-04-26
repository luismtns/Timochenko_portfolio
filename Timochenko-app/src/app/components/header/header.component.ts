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
      this._location.back();
    }else{
      this.router.navigate(['/'])
    }
    
    setTimeout(()=>{this.loaderService.hide();}, 100)
    
  }

}
