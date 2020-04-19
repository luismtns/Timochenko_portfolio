import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    timer(1000).subscribe(val =>{
      this.loaderService.hide();
    });
  }

}
