import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {pluck, switchMap, concatMap} from "rxjs/operators";
import {from} from "rxjs"

@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.css']
})
export class GridCardsComponent {

  public ArrayPokemons: Array<any> = [];
  // Primero el array se llene de info y luego los cards se llenen de manera correcta
  public loading:boolean = false; 
  private urlApiPokemon = "https://pokeapi.co/api/v2/pokemon";
  public indicePaginacion = 1;

  constructor(private http: HttpClient) { 
    this.getPokemons(this.urlApiPokemon);
    window.scroll(0,0);
  }

  public getPokemons(urlApi:string) {
    this.ArrayPokemons= [];
    this.loading = true; 
    this.http.get(urlApi)
    .pipe(
      pluck("results"),
      switchMap((PokemonsArray:Array<any>) => 
        from(PokemonsArray)
        .pipe(
          pluck("url"),
          concatMap((url:string) => this.http.get(url))
        )
      )
      ).subscribe((pokemon) => {
        this.ArrayPokemons.push(pokemon);
        //cuando ya se cargo toda la informacion de la api, ya no tiene que cargar el loading
        if(this.ArrayPokemons.length === 20){
          this.loading = false;
        } 
        console.log(this.loading);
      });
  }

  public paginationRight(){
    const offset = this.indicePaginacion * 20;
    this.indicePaginacion++;
    const urlActualizado = `${this.urlApiPokemon}?offset=${offset}&limit=20`;
    this.getPokemons(urlActualizado);
    console.log(urlActualizado);
  }

  public paginationLeft(){
    if(this.indicePaginacion == 1) return;
    this.indicePaginacion--;
    const offset = (this.indicePaginacion * 20)-20;
    const urlActualizado = `${this.urlApiPokemon}?offset=${offset}&limit=20`;
    this.getPokemons(urlActualizado);
    console.log(urlActualizado);
  }
}
