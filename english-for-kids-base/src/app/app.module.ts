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
import { FruitsComponent } from './pages/fruits/fruits.component';

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
    FruitsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
