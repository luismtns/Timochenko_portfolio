import { Component, OnInit, Input } from '@angular/core';
import { PageModule } from './page/page.module';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input() page: PageModule;

  constructor() { }

  ngOnInit(): void {
  }

}
