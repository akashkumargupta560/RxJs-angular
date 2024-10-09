import { Component } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent {

  sourceSub!:Subscription;

  users =[
    {name:'akash',skill:'angular'},
    {name:'avinash',skill:'reactjs'},
    {name:'vicky', skill:'java'},
    {name:'pawan', skill:'nodejs'}
  ]
  constructor(){}
 
  ngOnInit():void{

    //Example:-01

    const source = interval(1000);
    this.sourceSub =  source.pipe(
      take(5),
      toArray()
    ).
    subscribe(res=>{
      //console.log(res);

    });

    //Example:-2 // to convert data to in single array using from operator

    const source2 = from(this.users);
    source2.pipe(toArray())
    .subscribe(res =>{
      //console.log("from-array",res)
    })

    ///Example:- 3 using of operator

    const source3 = of('akash','vikash','rohit','mohit');
     source3.pipe(toArray()).subscribe(res=>{
      //console.log('sdf',res)
     })
                                                                                                                                                                                                                                                                                                                                                                                                       
  }
}
