import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { RxjsService } from 'src/app/services/rxjs.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {
  @ViewChild('inputField') inputField!:ElementRef
  @ViewChild('addBtn') addBtn!:ElementRef;

   constructor(private _rxjsSrv:RxjsService){}
   ngOnInit():void{}
   

   ngAfterViewInit(){
    let count = 1;
    fromEvent(this.addBtn?.nativeElement, 'click').subscribe(() =>{
      const valueCount = 'stream-data' + count;
      // console.log(valueCount);
      count++;
      const inputValue = this.inputField.nativeElement.value; ///Get the input Value from input field 
      this._rxjsSrv.printData(valueCount,'elContainer');
      this._rxjsSrv.printData(valueCount,'elContainer2');
      this._rxjsSrv.printData(inputValue,'elContainer')
    })
   }  
   
}
