import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionSetAComponent } from './pages/action-set-a/action-set-a.component';
import { ActionSetBComponent } from './pages/action-set-b/action-set-b.component';
import { ActionSetCComponent } from './pages/action-set-c/action-set-c.component';
import { AdjectiveComponent } from './pages/adjective/adjective.component';
import { FruitsComponent } from './pages/fruits/fruits.component';
import { MainComponent } from './pages/main/main.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'action-set-a', component: ActionSetAComponent},
  {path: 'action-set-b', component: ActionSetBComponent},
  {path: 'action-set-c', component: ActionSetCComponent},
  {path: 'adjective', component: AdjectiveComponent},
  {path: 'fruits', component: FruitsComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  MainComponent,
  ActionSetAComponent,
  ActionSetBComponent,
  ActionSetCComponent,
  FruitsComponent,
  StatisticsComponent,
  PageNotFoundComponent
]
