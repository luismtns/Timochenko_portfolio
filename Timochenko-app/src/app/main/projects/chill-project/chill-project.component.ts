import { Component, OnInit, Input } from '@angular/core';
import { TiltOptions } from 'vanilla-tilt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chill-project',
  templateUrl: './chill-project.component.html',
  styleUrls: ['./chill-project.component.scss']
})
export class ChillProjectComponent implements OnInit {

  constructor(
    private router:Router
  ) { }
  
  tiltOptions: TiltOptions = {
    reverse: true,
    glare: false,
    perspective: 1000,
    max: 10,
    easing: "cubic-bezier(.17,.67,.83,.67)"
  }

  ngOnInit(): void {
  }
  openProject(){
      this.router.navigate(['/p/Chill'])
  }
}
