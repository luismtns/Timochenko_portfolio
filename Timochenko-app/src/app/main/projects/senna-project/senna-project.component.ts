import { Component, OnInit } from '@angular/core';
import { TiltOptions } from 'vanilla-tilt';

@Component({
  selector: 'app-senna-project',
  templateUrl: './senna-project.component.html',
  styleUrls: ['./senna-project.component.scss']
})
export class SennaProjectComponent implements OnInit {

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
