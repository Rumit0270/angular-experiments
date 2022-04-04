import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {
  @Input()
  color: string = 'yellow';

  constructor(private el: ElementRef) {
    el.nativeElement.style.padding = '20px';
    el.nativeElement.style.color = 'black';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    // console.log('Mouse  entered');
    this.highlight(this.color);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // console.log('Mouse left');
    this.highlight('inherit');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
