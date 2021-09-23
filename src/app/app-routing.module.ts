import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'exercicio01',
    loadChildren: () => import('./exercicio01/exercicio01.module').then( m => m.Exercicio01PageModule)
  },
  {
    path: 'exercicio02',
    loadChildren: () => import('./exercicio02/exercicio02.module').then( m => m.Exercicio02PageModule)
  },
  {
    path: 'exercicio03',
    loadChildren: () => import('./exercicio03/exercicio03.module').then( m => m.Exercicio03PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
