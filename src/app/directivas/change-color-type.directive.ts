import { Directive, ElementRef, Renderer2, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeColorType]'
})
export class ChangeColorTypeDirective implements OnInit {

  @Input() nameType: string;

  constructor(private el: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
  }

  @HostListener('click') AddBackground() {
    this.render.setStyle(
      this.el.nativeElement,
      "background",
      this.ClickAddBackground(this.nameType),
    )
  }

  public ClickAddBackground(backgrounds: string) {

    switch (backgrounds) {
      case 'poison':
        return '#5E2D88';
      case 'grass':
        return '#25C94E';
      case 'fire':
        return '#F34755';
      case 'flying':
        return '#91A3AF';
      case 'water':
        return '#1A51CD';
      case 'bug':
        return '#3B984D';
      case 'normal':
        return '#72545C';
      case 'electric':
        return '#E1E22C';
      case 'ground':
        return '#6B4A1D';
      case 'fairy':
        return '#E91360';
      case 'fighting':
        return '#EC6430';
      case 'psychic':
        return '#F61D90';
      case 'rock':
        return '#451A09';
      case 'steel':
        return '#5C7269';
      case 'ice':
        return '#D5EFF3';
      case 'ghost':
        return '#313466';
      case 'dragon':
        return '#5BC9D8';
      default:
        return '#585977';
    }
  }
}