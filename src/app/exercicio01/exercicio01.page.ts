/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio01',
  templateUrl: './exercicio01.page.html',
  styleUrls: ['./exercicio01.page.scss'],
})
export class Exercicio01Page  {

  private nome: string;
  private nota1: number;
  private nota2: number;
  private nota3: number;
  private nota4: number;
  private nota5: number;
  private resultado: number;
  private msg: string;

  private media(): void {
    this.resultado = (this.nota1 + this.nota2 + this.nota3 + this.nota4 + this.nota5) / 5;

    if (this.resultado >= 5)
      {this.msg = 'Aprovado';}
    else
      {this.msg = 'Reprovado';}
  }
}
