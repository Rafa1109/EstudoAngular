import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  public contadoClique: number = 0;

  public urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg";

  public nome: string;

  adicionarClick() {
    this.contadoClique++;
  }

  removerClick() {
    this.contadoClique--;
  }

  zerarClick() {
    this.contadoClique = 0;
  }

  keyUp(event) {
    this.nome = event.target.value;
  }
}
