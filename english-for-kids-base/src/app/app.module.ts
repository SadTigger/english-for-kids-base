import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MainComponent } from './pages/main/main.component';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { StatisticsTableComponent } from './components/statistics-table/statistics-table.component';
import { HeaderComponent } from './components/header/header.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { CardComponent } from './components/card/card.component';
import { ActionSetAComponent } from './pages/action-set-a/action-set-a.component';
import { ActionSetBComponent } from './pages/action-set-b/action-set-b.component';
import { ActionSetCComponent } from './pages/action-set-c/action-set-c.component';
import { AdjectiveComponent } from './pages/adjective/adjective.component';
import { AnimalSetAComponent } from './pages/animal-set-a/animal-set-a.component';
import { AnimalSetBComponent } from './pages/animal-set-b/animal-set-b.component';
import { FruitsComponent } from './pages/fruits/fruits.component';
import { CardsService } from './cards.service';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { LoginComponent } from './components/login/login.component';
import { GradeStarComponent } from './components/grade-star/grade-star.component';
import { StartGameButtonComponent } from './components/start-game-button/start-game-button.component';
import { GameControlsComponent } from './components/game-controls/game-controls.component';
import { RepeatWordButtonComponent } from './components/repeat-word-button/repeat-word-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    PageNotFoundComponent,
    MainComponent,
    AsideMenuComponent,
    StatisticsTableComponent,
    HeaderComponent,
    SlideToggleComponent,
    CardComponent,
    ActionSetAComponent,
    ActionSetBComponent,
    ActionSetCComponent,
    AdjectiveComponent,
    AnimalSetAComponent,
    AnimalSetBComponent,
    FruitsComponent,
    CategoryCardComponent,
    LoginComponent,
    GradeStarComponent,
    StartGameButtonComponent,
    GameControlsComponent,
    RepeatWordButtonComponent,
  ],
  entryComponents: [ LoginComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
