import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() pokemonInput: any;

  constructor(private routes: Router) {
  }
  //Se ejecuta cuando ya se termino la app
  ngOnInit(): void {
    console.log(this.pokemonInput);
  }

  public GotoDescription(id: number) {
    this.routes.navigate(["description-pokemon", id]);
    console.log(id);
  }
}
