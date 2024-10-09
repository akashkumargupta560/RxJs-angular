import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { RxjsService } from 'src/app/services/rxjs.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent {
  
  obMsg:any
  constructor( private _rxjsSrv:RxjsService){}
  ngOnInit():void{

    // OF Example
    const obs1 = of('Anup','Shekhar','Sharma');
    obs1.subscribe((res:any)=>{
      //console.log('of-example',res);
      this._rxjsSrv.printData(res,'elContainer')
    })

    const obs2 = of({ a:'Anup', b:'Shekhar', c:'Sharma'});
    obs2.subscribe((res:any)=>{
      this.obMsg = res;
      console.log('of-exam',res);
      
    })

    ///FROM Example

     //array example
    const arrObs3 = from(['Angular','Reactjs','Laravel']);
    arrObs3.subscribe((res:any)=>{
      //console.log('from-example',res);
      this._rxjsSrv.printData(res,'elContainer-fromArray')
    })

    ///Promise example
    const promise = new Promise( resolve =>{
      setTimeout(() => {
        resolve('Promise resolved!')
      }, 3000);
    })
    promise.then(res =>{
      console.log('promise', res)
    })
    const promObs = from(promise);
    promObs.subscribe((res:any)=>{
      console.log('from-Promise',res);
      this._rxjsSrv.printData(res,'elContainer-fromPromise')
    })


    //FROM- STRING
    const string = from('Welcome to String!');
    string.subscribe((res:any)=>{
      console.log('from-String',res);
      this._rxjsSrv.printData(res,'elContainer-fromString')
    })
  }
}
