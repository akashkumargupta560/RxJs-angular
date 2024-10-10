import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { RxjsService } from 'src/app/services/rxjs.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit, OnDestroy{

  techStatus:any;
  techStatus2:any;
  sub2!:Subscription;
  names:any;
  nameStatus:any;
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
        observer.complete();
      },3000);
      setTimeout(()=>{
        observer.next('Laravel');
        //observer.error(new Error('Limit Excced!'));
      },4000);
      setTimeout(()=>{
        observer.next('Express js');
        // observer.complete();
      },5000);
    });

    cusObj1.subscribe((res:any) =>{
      //console.log(res)
      this._rxjsSrv.printData(res,'elContainer')
    },
    (err:any) =>{
      this.techStatus = "error";
    },
    ()=>{
       this.techStatus = "completed";
    });

    //Example- 02 (Custom Interval);
    let arr2 = ['Angular','javascript','php','reactjs','Java','Nodejs']
     const custObjs2 = Observable.create((observer:any) =>{
      let count = 0;
      setInterval(()=>{
        // observer.next('data emit' + count);
        observer.next(arr2[count]);
        if(count >= 3){
          observer.error('Error Emit')
        }
        if(count >= 5){
          observer.complete()
        }
        count++;
      },1000)
     })

     this.sub2 = custObjs2.subscribe((res:any) =>{
      //console.log(res);
      this._rxjsSrv.printData(res,"elContaine2")
     },
     (err:any) =>{
   
      this.techStatus2 = "error";
    },
    ()=>{
       
       this.techStatus2 = "completed";
    });
    

    ///Example - 03 (Random Names)

    let arr3 = ['Anup','Shekhar','Sharma','Monu','Ravi','Jonson']
    const custObj3 =Observable.create((observer:any) =>{
      let count = 0;
      setInterval(()=>{
        // observer.next('data emit' + count);
        observer.next(arr3[count]);
        if(count >= 3){
          observer.error('Error Emit')
        }
        if(count >= 5){
          observer.complete()
        }
        count++;
      },1000)
    });
    custObj3.subscribe((res:any) =>{
      console.log('sdf',res);
      this.names = res
    },
    (err:any) =>{
   
      this.nameStatus= "error";
    },
    ()=>{
       
       this.nameStatus = "completed";
    }
  ) 
  }
  ngOnDestroy(): void {
    this.sub2.unsubscribe();
  }
}
