import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { DescripcionPokemonComponent } from './components/descripcion-pokemon/descripcion-pokemon.component';
import { GridCardsComponent } from "./components/grid-cards/grid-cards.component";

const routes: Routes = [
    { path: 'cards', component: GridCardsComponent },
    { path: 'description-pokemon/:id', component:DescripcionPokemonComponent},
    { path: '**', pathMatch:'full', redirectTo: 'routePath' }
];

export const appRouting = RouterModule.forRoot(routes);