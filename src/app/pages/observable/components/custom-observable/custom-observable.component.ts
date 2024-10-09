import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RxjsService } from 'src/app/services/rxjs.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent {

  techStatus:any;
  constructor( private _rxjsSrv:RxjsService){}

  ngOnInit():void{

    //Example- 01 Manual
    const cusObj1 = Observable.create((observer: any) =>{
      setTimeout(()=>{
        observer.next('Angular');
      },1000);

      setTimeout(()=>{
        observer.next('Reactjs');
      },2000);

      setTimeout(()=>{
        observer.next('View.js');
        
      },3000);
      setTimeout(()=>{
        observer.next('Laravel');
        //observer.error(new Error('Limit Excced!'));
      },4000);
      setTimeout(()=>{
        observer.next('Express js');
        observer.complete();
      },5000);
    });

    cusObj1.subscribe((res:any) =>{
      console.log(res)
      this._rxjsSrv.printData(res,'elContainer')
    },
    (err:any) =>{
      this.techStatus = "error"
    },
    ()=>{
       this.techStatus = "completed";
    })
  }
}
