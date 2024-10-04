import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: string) {
    return new Intl.NumberFormat('en-IN', {
      style:'currency',
      currency:'INR',
      minimumFractionDigits:3
    }).format(Number(value));
  }

}
