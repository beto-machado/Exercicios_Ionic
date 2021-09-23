import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercicio03Page } from './exercicio03.page';

const routes: Routes = [
  {
    path: '',
    component: Exercicio03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercicio03PageRoutingModule {}
