import { Component, OnInit } from '@angular/core';
import { PageModule } from 'src/app/components/page-header/page/page.module';
import { NgsRevealConfig } from 'ngx-scrollreveal';
import { myNgsRevealConfig } from '../ngsRevealConfig';

@Component({
  selector: 'app-senna-page',
  templateUrl: './senna-page.component.html',
  styleUrls: ['./senna-page.component.scss']
})
export class SennaPageComponent implements OnInit {
  _page:PageModule = {
    "title": "Senna",
    "subTitle": "Art Direction & Motion Design",
    "imgSrc": "senna/Senna_cover",
    "imgAlt": "Senna project cover",
  }

  _ngsReveal:NgsRevealConfig  = myNgsRevealConfig;
  constructor() { }

  ngOnInit(): void {
  }

}
