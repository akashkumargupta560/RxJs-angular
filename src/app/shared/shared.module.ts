import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './libs/button/button.component';
import { BackButtonComponent } from './libs/back-button/back-button.component';
import { CardComponent } from './libs/card/card.component';
import { TableComponent } from './libs/table/table.component';



@NgModule({
  declarations: [
    ButtonComponent,
    BackButtonComponent,
    CardComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    ButtonComponent,
    BackButtonComponent,
    CardComponent,
    TableComponent
  ]
})
export class SharedModule { }
