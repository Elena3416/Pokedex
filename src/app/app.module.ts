import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** Components */
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridCardsComponent } from './components/grid-cards/grid-cards.component';
import { ChangeColorTypeDirective } from './directivas/change-color-type.directive';
import { SearchComponentComponent } from './components/search-component/search-component.component';

/** Material Components */
import { MatSliderModule } from '@angular/material/slider';
import { SidenavComponent } from './components/shared/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CardsComponent } from './components/cards/cards.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { DescripcionPokemonComponent } from './components/descripcion-pokemon/descripcion-pokemon.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { APP_ROUTES } from './app.routes';
import { AboutComponent } from "./components/about/about.component"

//  Importacion Metodo HTTP
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    CardsComponent,
    DescripcionPokemonComponent,
    GridCardsComponent,
    ChangeColorTypeDirective,
    SearchComponentComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
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
    MatChipsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
