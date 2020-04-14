import { EventEmitter, Injectable } from '@angular/core';
import { ContatoModel } from 'app/modelos/contato-model';

@Injectable()
export class ContatosDataBaseService {

  meuContatos: ContatoModel [] = [];
  enviarContato = new EventEmitter();  

  constructor() { }

  setContato(novoContato: ContatoModel): void {
    this.meuContatos.push(novoContato);

    this.enviarContato.emit(this.meuContatos);
  }


  getContato(id: number): ContatoModel {

    let contato: ContatoModel;

    contato = this.meuContatos[id];

    return contato;
  }
}