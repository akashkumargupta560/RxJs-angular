import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'web-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  
 
  @Input() label: string | undefined; // Accept a label from the parent
  @Output() onClick = new EventEmitter<any>(); // Emit an event on click

  constructor(private route:Router) {}

  ngOnInit(): void {}

  onClickButton(event: any) {
    this.onClick.emit(event); // Emit the event to the parent
  }
}
