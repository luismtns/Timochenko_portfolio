import { Component, OnInit } from '@angular/core';
import { PageModule } from 'src/app/components/page-header/page/page.module';

@Component({
  selector: 'app-palmeiras-page',
  templateUrl: './palmeiras-page.component.html',
  styleUrls: ['./palmeiras-page.component.scss']
})
export class PalmeirasPageComponent implements OnInit {
  _page:PageModule = {
    "title": "Palmeiras",
    "subTitle": "Ui & Art Direction",
    "imgSrc": "palmeiras/Palmeiras_cover",
    "imgAlt": "Palmeiras project cover",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
