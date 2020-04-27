import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mouse-style',
  templateUrl: './mouse-style.component.html',
  styleUrls: ['./mouse-style.component.scss']
})
export class MouseStyleComponent implements OnInit {
  constructor() { }
  x: number = 0;
  y: number = 0;

  ngOnInit(): void {
  }
  @Input() mouse_position: MouseEvent;
  @Input() mouse_active: boolean;
  @Input() pointer_click: boolean;



}
