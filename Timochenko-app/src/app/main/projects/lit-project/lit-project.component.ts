import { Component, OnInit } from '@angular/core';
import { TiltOptions } from 'vanilla-tilt';

@Component({
  selector: 'app-lit-project',
  templateUrl: './lit-project.component.html',
  styleUrls: ['./lit-project.component.scss']
})
export class LitProjectComponent implements OnInit {

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
