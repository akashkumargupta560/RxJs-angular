import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'web-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() title:string | undefined;
  @Input() buttonLabel:string | undefined;

  @Output() ButtonClick = new EventEmitter<any>();

  constructor(){}
  ngOnInit():void{}

  onButtonClick(){
    this.ButtonClick.emit();
  }
 
}
