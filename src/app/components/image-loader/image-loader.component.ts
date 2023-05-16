import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.css']
})
export class ImageLoaderComponent implements OnInit {

  @Input() imgSrc: string;
  @Input() loaderSrc: string;
  @Input() imgClass: string;
  @Input() imgAlt: string;

  loading: boolean = true

  onLoadImg() {
    this.loading = false;
    this.onLoad.emit(true)
  }

  @Output() onLoad = new EventEmitter<any>();
  constructor() { }

  ngOnInit() { }


}
