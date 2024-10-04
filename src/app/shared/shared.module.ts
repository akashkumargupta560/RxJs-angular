import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './libs/button/button.component';
import { BackButtonComponent } from './libs/back-button/back-button.component';
import { CardComponent } from './libs/card/card.component';



@NgModule({
  declarations: [
    ButtonComponent,
    BackButtonComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    ButtonComponent,
    BackButtonComponent,
    CardComponent
  ]
})
export class SharedModule { }
