import { Injectable } from '@angular/core';
import { ScreenState } from './screenHover.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenHoverService {

  private screenSubject = new Subject<ScreenState>();

  screenStatus = this.screenSubject.asObservable();

  constructor() { }

  update(_x, _y) {
    this.screenSubject.next(<ScreenState>{ 
      'x': _x,
      'y': _y,
    });
  }
}
