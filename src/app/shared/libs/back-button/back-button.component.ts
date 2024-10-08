import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent {
  @Input() label: string | undefined; // Accept a label from the parent
  @Output() onClick = new EventEmitter<any>(); // Emit an event on click

  constructor(private route:Router,private _location: Location) {}

  ngOnInit(): void {}

  onClickButton(event: any) {
   // this.onClick.emit(event); // Emit the event to the parent
    //this.route.navigate(['/promise']);
    this._location.back();
  }
}
