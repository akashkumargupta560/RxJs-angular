import { Component } from '@angular/core';

@Component({
  selector: 'web-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  list ='List All Data Card';
  fromEventTitle ='From-Event Card'
  constructor(){}
  ngOnInit():void{}

}
