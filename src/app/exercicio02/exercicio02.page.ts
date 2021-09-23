/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable curly */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio02',
  templateUrl: './exercicio02.page.html',
  styleUrls: ['./exercicio02.page.scss'],
})
export class Exercicio02Page {

  private saldomedio: number;
  private saldofinal: number;
  private msg: string;

  private valorcredito(): void {
    if ((this.saldomedio > 0) && (this.saldomedio <= 500))
      this.saldofinal = this.saldomedio * 0;
    else if ((this.saldomedio > 501) && (this.saldomedio <= 1000))
      this.saldofinal = this.saldomedio * (20.0 / 100);
    else if ((this.saldomedio > 1001) && (this.saldomedio <= 2000))
      this.saldofinal = this.saldomedio * (30.0 / 100);
    else if (this.saldomedio > 2001)
      this.saldofinal = this.saldomedio * (40.0 / 100);
  }
}
