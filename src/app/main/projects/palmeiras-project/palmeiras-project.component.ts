import { Component, OnInit } from '@angular/core';
import { TiltOptions } from 'vanilla-tilt';

@Component({
  selector: 'app-palmeiras-project',
  templateUrl: './palmeiras-project.component.html',
  styleUrls: ['./palmeiras-project.component.scss']
})
export class PalmeirasProjectComponent implements OnInit {

  constructor() { }

  tiltOptions: TiltOptions = {
    reverse: true,
    glare: false,
    perspective: 1000,
    max: 10,
    easing: "cubic-bezier(.17,.67,.83,.67)",
    gyroscope: true
  }
  ngOnInit(): void {
  }

}
