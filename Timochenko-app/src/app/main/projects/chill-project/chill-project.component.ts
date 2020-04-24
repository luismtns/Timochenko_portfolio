import { Component, OnInit } from '@angular/core';
import { TiltOptions } from 'vanilla-tilt';

@Component({
  selector: 'app-chill-project',
  templateUrl: './chill-project.component.html',
  styleUrls: ['./chill-project.component.scss']
})
export class ChillProjectComponent implements OnInit {

  constructor() { }
  
  tiltOptions: TiltOptions = {
    glare: false,
    perspective: 1000,
    max: 20,
    easing: "cubic-bezier(.17,.67,.83,.67)"
  }

  ngOnInit(): void {
  }

}
