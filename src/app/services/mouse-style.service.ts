import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MouseStatus } from './mouse.model';
@Injectable({
  providedIn: 'root'
})
export class MouseStyleService {

  private loaderSubject = new Subject<MouseStatus>();

  MouseStatus = this.loaderSubject.asObservable();

  constructor() { }

  show() {
    this.loaderSubject.next(<MouseStatus>{ hide: false });
  }

  hide() {
    this.loaderSubject.next(<MouseStatus>{ hide: true });
  }
}
