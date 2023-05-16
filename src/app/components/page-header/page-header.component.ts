import { Component, OnInit, Input } from '@angular/core';
import { PageModule } from './page/page.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input() page: PageModule;
  page_count: Object[] = [
    {
      name: '/p/Reebok',
      number:1,
      position: '0em',
    },
    {
      name: '/p/Lit',
      number:2,
      position: '-2em',
    },
    {
      name: '/p/Chillfy',
      number:3,
      position: '-4em',
    },
    {
      name: '/p/Senna',
      number:4,
      position: '-6em',
    },
    {
      name: '/p/Palmeiras',
      number:5,
      position: '-8em',
    },
  ];

  top_number_cont:string = '0em';

  FooterAnimation:boolean = window.localStorage.getItem('FooterAnimation') ? true:false;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getNumberPosition(this.router.url);
    
    if(this.FooterAnimation){
      console.log('FooterAnimation', window.localStorage.getItem('FooterAnimation'))
      window.localStorage.removeItem('FooterAnimation');
    }
  }

  
  getNumberPosition(page){
    var select_page = this.page_count.find(e=>e['name'] == page)
    var top_em = select_page['position']
    this.top_number_cont = top_em;
  }

}
