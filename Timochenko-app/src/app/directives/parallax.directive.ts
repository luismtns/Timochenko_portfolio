import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[parallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio: number = 1
  initialTop: number = 0

  constructor(private eleRef: ElementRef) {
    this.eleRef.nativeElement.style.position = 'relative';
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event) {
    this.eleRef.nativeElement.style.marginTop = (this.initialTop - (window.scrollY / this.parallaxRatio))  + 'px'
    // this.eleRef.nativeElement.style.marginBottom = (this.initialTop - (window.scrollY / this.parallaxRatio))/2  + 'px'
  }
}
