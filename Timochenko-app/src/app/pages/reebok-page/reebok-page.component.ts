import { Component, OnInit } from '@angular/core';
import { PageModule } from 'src/app/components/page-header/page/page.module';

@Component({
  selector: 'app-reebok-page',
  templateUrl: './reebok-page.component.html',
  styleUrls: ['./reebok-page.component.scss']
})
export class ReebokPageComponent implements OnInit {
  _page:PageModule = {
    "title": "Reebok",
    "subTitle": "Art Direction",
    "imgSrc": "reebok/Reebok_cover",
    "imgAlt": "Reebok project cover",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
