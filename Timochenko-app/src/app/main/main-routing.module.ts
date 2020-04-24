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
        component: ChillProjectComponent, 
        data: {animation: 'Home'}
      },
      {
        path: 'lit',
        component: LitProjectComponent, 
        data: {animation: 'Lit'}
      },
      {
        path: 'reebok',
        component: ReebokProjectComponent, 
        data: {animation: 'Reebok'}
      },
      {
        path: 'senna',
        component: SennaProjectComponent, 
        data: {animation: 'Senna'}
      },
      {
        path: 'palmeiras',
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