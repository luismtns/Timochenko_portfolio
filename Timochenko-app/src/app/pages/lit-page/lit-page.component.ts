import { Component, OnInit } from '@angular/core';
import { PageModule } from 'src/app/components/page-header/page/page.module';

@Component({
  selector: 'app-lit-page',
  templateUrl: './lit-page.component.html',
  styleUrls: ['./lit-page.component.scss']
})
export class LitPageComponent implements OnInit {

  _page:PageModule = {
    "title": "Lit",
    "subTitle": "Motion & Sound Design",
    "imgSrc": "lit/Lit",
    "imgAlt": "Lit project cover",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
