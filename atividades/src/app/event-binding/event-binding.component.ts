import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  habilitarBotao: boolean = false;
  valores: string[] = [];
  idade: number = 0;

  constructor() { }

  ngOnInit() {
  }

  meuClick(){
    console.log('evento meuClick do botão.')
  }

  digitou($event){
      console.log($event);
  }

  digitouVarTemplate(valor):void{
    console.log(valor);
  }

  validaSenha(valor: string){
    if(valor.length >=5){
      this.habilitarBotao = true;
    }else{
      this.habilitarBotao = false;
    }
  }

  gravarSenha(senha){
    alert('Senha gravada com sucesso. Sua senha é '+senha)
  }

  adicionar(conteudo: string){
    this.valores.push(conteudo);
  }

  verIdade(valor){
    let ano = new Date();
    this.idade = ano.getFullYear()-valor;
  }
}
