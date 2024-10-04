import { Component } from '@angular/core';

@Component({
  selector: 'app-asyn-await',
  templateUrl: './asyn-await.component.html',
  styleUrls: ['./asyn-await.component.scss']
})
export class AsynAwaitComponent {

  constructor(){}

  ngOnInit():void{}

  handleButtonClick() {
    console.log('Card button clicked!');
    // Additional logic can go here
  }
}
