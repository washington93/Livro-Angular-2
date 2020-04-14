import { Injectable, Optional } from '@angular/core';
import { MeuLogService } from './meu-log.service';

@Injectable()
export class NomesTecService {
//meuLog: MeuLogService;
  constructor(@Optional() private meuLog: MeuLogService) { 
    //this.meuLog= meuLog;
  }

  getNomesTec(): string[]{
    if(this.meuLog){
      this.meuLog.setLog('Consultou o array de tecnologias.');
    }
    return ['Angular','Javascript', 'Typescript','HTML','CSS','Nodejs','Visual Studio Code'];
  }
}
