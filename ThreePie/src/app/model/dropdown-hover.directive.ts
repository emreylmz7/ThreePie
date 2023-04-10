import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[dropdownHover]'
})
export class DropdownHoverDirective {

  private dropdownMenu: HTMLElement;

  constructor(private element: ElementRef) {
    this.dropdownMenu = this.element.nativeElement.querySelector('.dropdown-menu');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.classList.add('show');
    this.dropdownMenu.classList.add('show');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.classList.remove('show');
    this.dropdownMenu.classList.remove('show');
  }

}