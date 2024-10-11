import { Component } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';
import { RxjsService } from 'src/app/services/rxjs.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent {
   
  randomArr=['Anup','Shekhar','Sharma','Monu','Ravi','Jonson','Thomos','Smith']
  constructor(private rxjsSrv:RxjsService){}

  ngOnInit():void{

    const nameSource= from(this.randomArr)
    //Examp -01 | Take 
    // const sources = interval(1000).pipe(
    //   take(5)
    // );
    nameSource.pipe(
      take(4)
    )
    .subscribe(res=>{
      //console.log('take',res);
      this.rxjsSrv.printData(res,'elContainer')
    })

     //Examp -02 | TakeLast 

    nameSource.pipe(
      takeLast(3)
    )
    .subscribe(res=>{
      //console.log('takeLat',res);
      this.rxjsSrv.printData(res,'elContainer2')
    })

     //Examp -03 | TakeUntil
      const sources = interval(1000)

       let condition1 = timer(5000);
       let condition2 = fromEvent(document,'click');
      sources.pipe(
        map(res=>'Number' + res),
        takeUntil(condition2)
      )
      .subscribe(res=>{
        console.log('takeLat',res);
        this.rxjsSrv.printData(res,'elContainer3')
      })
  }
}
