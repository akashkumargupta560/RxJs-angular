import { Component } from '@angular/core';
import { interval, map, Subscription, tap } from 'rxjs';
import { RxjsService } from 'src/app/services/rxjs.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent {
  myColor!:string;
   
  constructor(private rxjsSrv:RxjsService){}

  ngOnInit():void{
    let obsSubcription: Subscription;
    const sources = interval(1000);
    let arr1 = ['Anup','Shekhar','Sharma','Monu','Ravi','Jonson'];
 
    ///Examp- 01

   obsSubcription = sources.pipe(
    tap(value =>{
      // console.log('tap-operator-value',value)
      if(value ==4){
        obsSubcription.unsubscribe()
      }
    }),
    map(data =>arr1[data])
  )
    .subscribe((res:any)=>{
      // console.log('tap-operator',res)
      this.rxjsSrv.printData(res,'elContainer')
    });

    /// ///Examp- 02
    let obsSubcription2: Subscription;

    let colors = ['Red','Green','Blue','Orange','Black','Gray','Purple','Brown','Maroon'];

    obsSubcription2 = sources.pipe(
      tap(value =>{
        this.myColor =colors[value]
        console.log('tap-operator-value',value)
        if(value ==6){
          obsSubcription2.unsubscribe()
        }
      }),
      map(data =>colors[data])
    )
      .subscribe((res:any)=>{
        console.log('tap-operator',res)
        this.rxjsSrv.printData(res,'elContainer2')
      });
  }
}
