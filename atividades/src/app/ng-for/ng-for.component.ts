import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  nomes: any[] = [
    {id:1, nome:'Dybala'},
    {id:2, nome:'Higuaín'},
    {id:3, nome:'Ronaldo'},
    {id:4, nome:'Buffon'}
  ];

  constructor() { }

  ngOnInit() {
  }

  meuSave(index: number, nomes: any){
    return nomes.id;
  }

  atualizar(){
    this.nomes=[
      {id:1, nome:'Dybala'},
      {id:2, nome:'Higuaín'},
      {id:3, nome:'Ronaldo'},
      {id:4, nome:'Buffon'},
      {id:5, nome:'Matuidi'},
      {id:6, nome:'Chiellini'}
    ]
  }

}
