import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { pluck, switchMap, map, filter } from "rxjs/operators"

@Component({
  selector: 'app-descripcion-pokemon',
  templateUrl: './descripcion-pokemon.component.html',
  styleUrls: ['./descripcion-pokemon.component.css']
})
export class DescripcionPokemonComponent implements OnInit {

  public PokemonRecibido: any;
  public descripcion:string;

  constructor(private ActivatedRouter: ActivatedRoute, private http: HttpClient) {
    this.ActivatedRouter.params
      .pipe(
        pluck("id"),
        switchMap(id => this.GetPokemon(id)),
        switchMap((pokemon) => this.http.get(pokemon.species.url)
          .pipe( 
            map((nuevaDataPokemon) => ({ ...pokemon, ...nuevaDataPokemon }))
          )
        )
      )
      .subscribe((pokemon) => {
        this.PokemonRecibido = pokemon;
        this.descripcion = this.PokemonRecibido.flavor_text_entries
         .find(descripcion => descripcion.language.name 
          == "es"? descripcion.flavor_text:null);

        console.log(this.PokemonRecibido);
        console.log(this.descripcion);
      });
     }
  
  ngOnInit(): void {
  }

  public GetPokemon(id: string): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
