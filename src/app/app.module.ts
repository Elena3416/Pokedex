import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** Components */
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Material Components */
import { MatSliderModule } from '@angular/material/slider';
import { SidenavComponent } from './sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CardsComponent } from './components/cards/cards.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { DescripcionPokemonComponent } from './components/descripcion-pokemon/descripcion-pokemon.component';
import {appRouting} from "./app.routes"
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatChipsModule} from '@angular/material/chips';
 
/**
 * Importacion Metodo HTTP
 */
import { HttpClientModule } from "@angular/common/http";
import { GridCardsComponent } from './components/grid-cards/grid-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    CardsComponent,
    DescripcionPokemonComponent,
    GridCardsComponent
  ],
  imports: [
    appRouting,
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
