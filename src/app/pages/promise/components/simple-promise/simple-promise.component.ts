import { Component, OnInit } from '@angular/core';
import {UserTypes}  from '../../../../models/dataType'
import { Router } from '@angular/router';
@Component({
  selector: 'app-simple-promise',
  templateUrl: './simple-promise.component.html',
  styleUrls: ['./simple-promise.component.scss']
})
export class SimplePromiseComponent implements OnInit{

  label = "Back"
  
  promiseValue:any;
  userValues:any;
  constructor(private route:Router){}
  backHome(){
    this.route.navigate(['/promise'])
  }
   userDetails:UserTypes[] =[
    {
      'fullname':'akash gupta',
      'username':'gupta@1',
      'email':'gupta1@gmail.com',
      'phone':98765342,
      'gender':'male',
      'address':[
        {
          'Hsno':1623,
          'street':'pcl road',
        },
        {
          'landmark':'near narayan mandir'
        }
      ]
    },
  ]

  mackBook(){
   return false;
   //return true;
  }
  hpLaptop(){
    return false
  }
  ngOnInit():void{
    let buyLaptop = new Promise((resolve, reject) =>{
      //resolve('Promise is resolved!');
      // reject('Promise is Rejected!')
      if(this.hpLaptop()){
        setTimeout(()=>{
          resolve('Hp Laptop is Perchased!');
        },3000)
        resolve('Hp Laptop is Perchased!');
      }else if(this.mackBook()){
        setTimeout(()=>{
          resolve('MackBook Laptop is Perchased!');
        },3000)
       
      }else{
        reject('Laptop is not Available on Store!')
      }
    });

    buyLaptop.then(res=>{
      //console.log('Success',res);
      this.promiseValue=res;
    }).catch((err)=>{
      //console.log('Catch code =>',err)
      this.promiseValue = err;
    });


    ////Using Object Method
   let userData = new Promise((resolve, reject) =>{
    if(this.userDetails){
       resolve(this.userDetails)
    }else{
       reject('User Details Not Found!')
    }
  });
  userData.then(res=>{
    //console.log('Success',res);
    this.userValues=res;
  }).catch(err=>{
    this.userValues = err;
  })

  }
  
}
