import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appFullSize]',
})
export class FullSizeDirective {
  @Input('appFullSize')
  size = '0';

  private isEnlarged = false; // Variable pour suivre l'état d'agrandissement

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  onClick() {
    const image = this.el.nativeElement;

    if (this.isEnlarged) {
      this.renderer.setStyle(image, 'transform', 'scale(1)'); // Remettre à la taille normale
    } else {
      this.renderer.setStyle(image, 'transform', 'scale(1.5)');
    }

    this.isEnlarged = !this.isEnlarged; // Inverser l'état d'agrandissement
  }

  @HostListener('mouseover')
  onMouseOver(event: MouseEvent): void {
    this.el.nativeElement.style = 'cursor:zoom-in';
  }

  @HostListener('mouseout')
  onMouseOut(event: MouseEvent): void {
    this.el.nativeElement.style = 'cursor:default';
  }
}
