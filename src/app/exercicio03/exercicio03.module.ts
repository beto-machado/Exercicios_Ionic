import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercicio03PageRoutingModule } from './exercicio03-routing.module';

import { Exercicio03Page } from './exercicio03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercicio03PageRoutingModule
  ],
  declarations: [Exercicio03Page]
})
export class Exercicio03PageModule {}
