import { Component, OnInit, Input } from '@angular/core';
import { MouseStyleService } from './../../services/mouse-style.service';
import { MouseStatus } from './../../services/mouse.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mouse-style',
  templateUrl: './mouse-style.component.html',
  styleUrls: ['./mouse-style.component.scss']
})
export class MouseStyleComponent implements OnInit {
  constructor(
    private _MouseStyleService: MouseStyleService
  ) { }
  x: number = 0;
  y: number = 0;

  private subscription: Subscription;
  ngOnInit(): void {
    this.subscription = this._MouseStyleService.MouseStatus
    .subscribe((state: MouseStatus) => {
      this.mouse_active = !state.hide;
    });
  }

  @Input() mouse_position: MouseEvent;
  @Input() mouse_active: boolean;
  @Input() pointer_click: boolean;



}
