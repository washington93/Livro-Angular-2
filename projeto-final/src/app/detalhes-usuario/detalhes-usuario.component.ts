import { Component, Input } from '@angular/core';
import { ContatoModel } from 'app/modelos/contato-model';

@Component({
  selector: 'app-detalhes-usuario',
  templateUrl: './detalhes-usuario.component.html',
  styleUrls: ['./detalhes-usuario.component.css']
})
export class DetalhesUsuarioComponent {

  @Input() contato: ContatoModel;

}
