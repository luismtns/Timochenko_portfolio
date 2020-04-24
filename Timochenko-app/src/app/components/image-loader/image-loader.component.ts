import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.css']
})
export class ImageLoaderComponent implements OnInit {

  @Input() imgSrc: string;
  @Input() loaderSrc: string;
  @Input() imgClass: string;

  loading: boolean = true

  onLoad() {
    this.loading = false;
  }

  constructor() { }

  ngOnInit() { }


}
