import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './libs/button/button.component';
import { CurrencyPipe } from './pipes/currency/currency.pipe';



@NgModule({
  declarations: [
    // CurrencyPipe,
    ButtonComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[ButtonComponent]
})
export class SharedModule { }
