import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercicio01Page } from './exercicio01.page';

const routes: Routes = [
  {
    path: '',
    component: Exercicio01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercicio01PageRoutingModule {}
