import { Component, OnInit } from '@angular/core';
import { PageModule } from 'src/app/components/page-header/page/page.module';

@Component({
  selector: 'app-chill-page',
  templateUrl: './chill-page.component.html',
  styleUrls: ['./chill-page.component.scss']
})
export class ChillPageComponent implements OnInit {
  _page:PageModule = {
    "title": "Chill.fy",
    "subTitle": "Creative Direction",
    "imgSrc": "chill/Chillfy",
    "imgAlt": "Chill.fy project cover",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
