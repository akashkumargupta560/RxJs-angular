import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { RxjsService } from 'src/app/services/rxjs.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit{
  firstName:any;
  lastName:any;
///subscribeModes
subscribe2Modes:boolean=false;
subscribe3Modes:boolean=false;

//Subscriptions
subscription2!: Subscription;
subscription3!: Subscription;

//Toggle Properties
methodInterval:boolean = false;
intSubscription!: Subscription;
constructor(private rxjsSrv:RxjsService){}
user1List:any =[
  'Angular',
  'Reactjs',
  'Viewjs'
];
user2List:any =[];
user3List:any =[];

ngOnInit():void{
  this.rxjsSrv.vedioEmit.subscribe(res=>{
    console.log('--->',res)
    this.user1List.push(res)
  })
}

///Add addVedios Method
addVedios(vedios:any){
  //console.log(vedios);
  this.rxjsSrv.vedioEmit.next(vedios);
  
}
//User 2 Subscribe method
user2Subscribe(){
  if(this.subscribe2Modes){
    this.subscription2.unsubscribe()
  }else{
    this.subscription2 = this.rxjsSrv.vedioEmit.subscribe(res=>{
      this.user2List.push(res);
    })
  }
  this.subscribe2Modes = !this.subscribe2Modes 
}
user3Subscribe(){
  if(this.subscribe3Modes){
    this.subscription3.unsubscribe();
  }else{
    this.subscription3 = this.rxjsSrv.vedioEmit.subscribe(res=>{
      this.user3List.push(res);
    })
  }
  this.subscribe3Modes = !this.subscribe3Modes 
}

///Toggle Method
toggleMethod(){
  const broadCastVedio =interval(1000);
  if(!this.methodInterval){
    this.intSubscription = broadCastVedio.subscribe(res =>{
      this.rxjsSrv.vedioEmit.next('Vedio '+ res)
    })
  }else{
    this.intSubscription.unsubscribe()
  }
 
  this.methodInterval = !this.methodInterval;
}
}
