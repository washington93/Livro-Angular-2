import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DadosUsuarioComponent } from './dados-usuario/dados-usuario.component';
import { DetalhesUsuarioComponent } from './detalhes-usuario/detalhes-usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { ContatosDataBaseService } from './servicos/contatos-data-base.service';

@NgModule({
  declarations: [
    AppComponent,
    DadosUsuarioComponent,
    DetalhesUsuarioComponent,
    ListaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ContatosDataBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
