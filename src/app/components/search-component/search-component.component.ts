import { Component, OnInit, ViewChild, ElementRef , AfterViewInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fromEvent} from 'rxjs';
import { pluck, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit, AfterViewInit {

  /* Decorador que sirve para hacer referencia a un elemento html por medio del id de angular 
  Se utiliza como el getElementbyId, la unica diferencia que puede utiliza el id de angular*/
  /* inputsearch:elementref = document.getelementbyid('inputsearch) 
  pero este no utilza id de angular*/
  @ViewChild('inputSearch') inputSearch:ElementRef;

  public PokemonRecibido:any;
  public loading:boolean = true;

  private url = `https://pokeapi.co/api/v2/pokemon/`;

  /* Constructor: funcion que se ejecuta cuando se instancia el componente.
   Cuando se instancia un componente, cuando usamos su etiqueta. */
  constructor( private http:HttpClient) {}

  /* OnInit: Funcion que se ejecuta despues del constructor y cuando terminan de crear el html
  y el css.
  Si tengo un metodo que haga referencia a una etiqueta html, necesito ponerlo en el oninit,
  porque si lo pongo en un constructor, me va a marcar error de que el elemento no existe. 
  Aqui solo se instancian los input e outputs */
  ngOnInit(): void {}

   /** ngAfterViewInit: Es un metodo que se ejecuta despues del OnInit(),
    * Su objetivo es verificar que los elementos ya estan renderizados, la diferencia que tiene el 
    * ngAfter y el Oninit, es que el after espera a que sus elementos esten renderizados, por lo 
    * tanto es necesario establecer aqui todo lo que tenga que ver con viewChild debido a que este
    * decorador busca la referencia del id en el DOM y no en la logica de angular. 
    */
  ngAfterViewInit():void{
    this.SearchPokemon();
    } 

  //SearchPokemon: Metodo que nos ayudara a obtener la informacion del pokemon buscado por el rjxs
  public SearchPokemon(){ 
    fromEvent(this.inputSearch.nativeElement, 'keyup')
    .pipe(
      debounceTime(1500),
      pluck('target', 'value'),
      switchMap((nombrePokemon) => this.http.get(`${this.url}${nombrePokemon}`))
      )
      .subscribe(
        (value) => {
        this.PokemonRecibido=value; 
        this.loading = false;
    },
    (error) => this.SearchPokemon()
    );
  }
}

/**
 * Cuando el servidor recibe una respuesta correcta, manda un status 200,
 * Cuando no encuenta el link para entrar marca 404
 * El callback error del subscribe, vuelve a ejecutar la funcion del searchpokemon, para volver
 * instanciar el fromevent y poder continuar con las busquedas.
 *  */