import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'web-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  
  @Input() label: string | undefined; // Accept a label from the parent
  @Input() buttonClass: string | undefined; // Accept a button class from the parent
  @Output() onClick = new EventEmitter<any>(); // Emit an event on click

  constructor(private route:Router,private _location: Location) {}

  ngOnInit(): void {}

  onClickButton(event: any) {
    //this.onClick.emit(event); // Emit the event to the parent
    //this._location.back();
  }
}
