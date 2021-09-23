import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercicio01PageRoutingModule } from './exercicio01-routing.module';

import { Exercicio01Page } from './exercicio01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercicio01PageRoutingModule
  ],
  declarations: [Exercicio01Page]
})
export class Exercicio01PageModule {}
