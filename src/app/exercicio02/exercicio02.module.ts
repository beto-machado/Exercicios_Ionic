import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercicio02PageRoutingModule } from './exercicio02-routing.module';

import { Exercicio02Page } from './exercicio02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercicio02PageRoutingModule
  ],
  declarations: [Exercicio02Page]
})
export class Exercicio02PageModule {}
