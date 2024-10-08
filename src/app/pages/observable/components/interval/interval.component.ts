import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { RxjsService } from 'src/app/services/rxjs.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent {
   
  obsMsg:any;
  vedioSubscription!: Subscription; /// this is simple way to subscripe
  constructor(private _rxjsSrv: RxjsService){}

  ngOnInit():void{
    // const broadCastVedio = interval(2000); ///interval emits the first event immediately and then continuously with the same interval,
    // timer(delay, interval)
    const broadCastVedio = interval(2000); //timer starts after a given time to emit events every given time
    this.vedioSubscription = broadCastVedio.subscribe((res:any) =>{
        console.log('interval-vedio', res);
        this.obsMsg ='vedios' + res;
        this._rxjsSrv.printData(this.obsMsg, 'elContainer');
        this._rxjsSrv.printData(this.obsMsg, 'elContainer2');
        this._rxjsSrv.printData(this.obsMsg, 'elContainer3');

        if(res>=5){
          this.vedioSubscription.unsubscribe()
        }
      })
    }

  
}
