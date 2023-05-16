import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeViewComponent } from './Home/home-view/home-view.component';
import { ChillProjectComponent } from './projects/chill-project/chill-project.component';
import { LitProjectComponent } from './projects/lit-project/lit-project.component';
import { ReebokProjectComponent } from './projects/reebok-project/reebok-project.component';
import { SennaProjectComponent } from './projects/senna-project/senna-project.component';
import { PalmeirasProjectComponent } from './projects/palmeiras-project/palmeiras-project.component';

const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent,
    children: [
      {
        path: '',
        component: ReebokProjectComponent, 
        data: {animation: 'Home'}
      },
      {
        path: 'Lit',
        component: LitProjectComponent, 
        data: {animation: 'Lit'}
      },
      {
        path: 'Chillfy',
        component: ChillProjectComponent, 
        data: {animation: 'Chillfy'}
      },
      {
        path: 'Senna',
        component: SennaProjectComponent, 
        data: {animation: 'Senna'}
      },
      {
        path: 'Palmeiras',
        component: PalmeirasProjectComponent, 
        data: {animation: 'Palmeiras'}
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }