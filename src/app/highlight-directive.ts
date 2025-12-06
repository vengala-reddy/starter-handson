import { Directive, ElementRef, HostListener, inject, input, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
 @Input('appHighlight') highlightColor!:string;
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  constructor() { }
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.el.nativeElement, 'backgroundColor', this.highlightColor || 'yellow'
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(
      this.el.nativeElement, 'backgroundColor'
    );
  }

}
