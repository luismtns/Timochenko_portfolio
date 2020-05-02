import { Component, AfterViewInit } from '@angular/core';
import { PageModule } from 'src/app/components/page-header/page/page.module';

@Component({
  selector: 'app-senna-page',
  templateUrl: './senna-page.component.html',
  styleUrls: ['./senna-page.component.scss']
})
export class SennaPageComponent implements AfterViewInit {
  _page:PageModule = {
    "title": "Senna",
    "subTitle": "Art Direction & Motion Design",
    "imgSrc": "senna/Senna_cover",
    "imgAlt": "Senna project cover",
  }

  constructor() { }

  ngAfterViewInit(): void {
  }

}
