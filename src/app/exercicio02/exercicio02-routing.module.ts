import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercicio02Page } from './exercicio02.page';

const routes: Routes = [
  {
    path: '',
    component: Exercicio02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercicio02PageRoutingModule {}
