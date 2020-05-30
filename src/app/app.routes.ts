import { Routes, RouterModule }  from "@angular/router";
import { DescripcionPokemonComponent } from './components/descripcion-pokemon/descripcion-pokemon.component';
import { GridCardsComponent } from "./components/grid-cards/grid-cards.component";
import { SearchComponentComponent } from "./components/search-component/search-component.component"
import { AboutComponent } from './components/about/about.component';

const Rutas: Routes = [
    { path: 'cards', component: GridCardsComponent },
    { path: 'description-pokemon/:id', component: DescripcionPokemonComponent }, 
    { path: 'about', component:AboutComponent},
    { path:'search', component:SearchComponentComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'cards' }
];

export const APP_ROUTES = RouterModule.forRoot(Rutas, {useHash:true});