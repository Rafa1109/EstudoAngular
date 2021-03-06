import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  public produtos: Produto[];

  ngOnInit(): void {
    this.listaProdutos();
  }

  listaProdutos() {
    this.produtoService.obterProdutos().subscribe(
      resposta => {
        this.produtos = resposta;
      }, error => {
        console.log(error);
      }
    );
  }

}
