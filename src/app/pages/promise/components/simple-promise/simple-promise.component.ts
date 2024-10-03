import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-promise',
  templateUrl: './simple-promise.component.html',
  styleUrls: ['./simple-promise.component.scss']
})
export class SimplePromiseComponent implements OnInit{
  promiseValue:any;
  constructor(){}

  mackBook(){
   return true;
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
      console.log('Success',res);
      this.promiseValue=res;
    }).catch((err)=>{
      console.log('Catch code =>',err)
      this.promiseValue = err;
    })
  }
}
