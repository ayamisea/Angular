import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { UitestComponent} from './uitest/uitest.component';
import { ChartComponent} from './chart/chart.component';
import {  D3ChartComponent} from './d3-chart/d3-chart.component';
import { MaterialSearchComponent} from './material-search/material-search.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'UI', component:UitestComponent },
  { path: 'chart', component:ChartComponent },
  { path: 'd3', component: D3ChartComponent },
  { path: 'material-search', component: MaterialSearchComponent  },
  { path: 'detail/:id', component: HeroDetailComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
