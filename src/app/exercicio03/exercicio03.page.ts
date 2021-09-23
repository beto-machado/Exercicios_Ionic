import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio03',
  templateUrl: './exercicio03.page.html',
  styleUrls: ['./exercicio03.page.scss'],
})
export class Exercicio03Page {

  private atual: number;
  private reajuste: number;
  private salariofinal: number;
  private msg: number;

  private reajustesalarial(): void {

    this.salariofinal = this.atual * (this.reajuste / 100);
    this.msg = (this.salariofinal + this.atual);
  }
}
