import { Component } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { RxjsService } from 'src/app/services/rxjs.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  
  msgData:any;
  msgData2:any;
  sub1!:Subscription;
  sub2!:Subscription;
  constructor(private _rxjsSrv:RxjsService){}

  ngOnInit():void{

    const broadCastVedios = interval(1000);

  //Examp:-1

   this.sub1 = broadCastVedios.pipe(map(data=>'map-data'+ data))
   .subscribe((res:any) =>{
      //console.log(res);
      this.msgData = res;
    });

    setTimeout(()=>{
      this.sub1.unsubscribe()
    },10000)


      //Examp:-2
      //this.sub2 =broadCastVedios.pipe(map(data => data % 2 ===0 ?data*2:data*3))
      this.sub2 =broadCastVedios.pipe(map(data => data * 3))
      .subscribe((res:any)=>{
        //console.log(res);
        this.msgData2 = res
      })


      setTimeout(()=>{
        this.sub2.unsubscribe()
      },10000)

        //Examp:-3

        const members = from([
          { id:1, name:'akash'},
          { id:2, name:'rahul'},
          { id:3, name:'ujjwal'},
          { id:4, name:'avinash'},
          { id:5, name:'kartik'},
          { id:6, name:'vicky'},
          { id:7, name:'mohit'},
          { id:8, name:'prakash'},
          { id:9, name:'rohit'},
          { id:10, name:'mukesh'},
        ])

        members.pipe(map(data=>data.name))
        .subscribe(res =>{
          console.log('members',res)
          this._rxjsSrv.printData(res,'elContainer')
        })
  }


}
