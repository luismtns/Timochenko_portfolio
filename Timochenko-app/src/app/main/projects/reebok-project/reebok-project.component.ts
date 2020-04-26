import { Component, OnInit } from '@angular/core';
import { TiltOptions } from 'vanilla-tilt';

@Component({
  selector: 'app-reebok-project',
  templateUrl: './reebok-project.component.html',
  styleUrls: ['./reebok-project.component.scss']
})
export class ReebokProjectComponent implements OnInit {

  constructor() { }

  tiltOptions: TiltOptions = {
    reverse: true,
    glare: false,
    perspective: 1000,
    max: 10,
    easing: "cubic-bezier(.17,.67,.83,.67)"
  }
  ngOnInit(): void {
  }

}
