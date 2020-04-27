import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ChillPageComponent } from './pages/chill-page/chill-page.component';
import { LitPageComponent } from './pages/lit-page/lit-page.component';
import { ReebokPageComponent } from './pages/reebok-page/reebok-page.component';
import { SennaPageComponent } from './pages/senna-page/senna-page.component';
import { PalmeirasPageComponent } from './pages/palmeiras-page/palmeiras-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { LoaderComponent } from './loader/loader.component';
import { BlankComponent } from './components/blank/blank.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './main/main.module#MainModule',
  },
  {
    path: 'p/Chill',
    component: ChillPageComponent
  },
  {
    path: 'p/Lit',
    component: LitPageComponent
  },
  {
    path: 'p/Reebok',
    component: ReebokPageComponent
  },
  {
    path: 'p/Senna',
    component: SennaPageComponent
  },
  {
    path: 'p/Palmeiras',
    component: PalmeirasPageComponent
  },
  {
    path: 'About',
    component: AboutPageComponent
  },
  {
    path: 'About',
    component: AboutPageComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: '**', component:BlankComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    preloadingStrategy: PreloadAllModules,
    onSameUrlNavigation: 'reload',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }