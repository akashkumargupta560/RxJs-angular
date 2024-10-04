import { Component } from '@angular/core';

@Component({
  selector: 'app-asyn-await',
  templateUrl: './asyn-await.component.html',
  styleUrls: ['./asyn-await.component.scss']
})
export class AsynAwaitComponent {
  titlePromise='Exam:-(1) With Promise';
  titleAsync ='Exam:-(2) With Async/Await';
  titleAsyncPromise='Exam:-(3) With Fetch API';
  promise:any
  buyLaptop:any;
  receiveValue:any;
  constructor(){

    this.promise = new Promise( (resolve,reject) =>{
      setTimeout(() =>{
        resolve('Data Revieced!')
      },3000)
    })
  }
   lapTop=[
    {
      'brand':'HP',
      'color':'gray',
      'price':50000,
      'hardDisk':'512 GB',
    },
  ]

  ngOnInit():void{
    this.logData();
    this.promisData();
    this.getValues();
    this.examPromise();
   
  }
  
  
  
  async getValues(){
    let response = await this.promise;
    //console.log('sfsdf',response)
  }

  handleButtonClick() {
    //console.log('Card button clicked!');
    // Additional logic can go here
  }
   
  ////Using async/await   ///async keyword with function always return promise
  async getData(){
    return 'Data Recevied through async/await!'
  }

  async logData(){
    const data = await this.getData()
    //console.log(data)
  }

  /////////Using Promise
  async getValue(){
    return 'Data Recevied through Promise!'
  }
  async promisData(){
    this.getValue().then(data=>{
      //console.log(data)
    })
  }

  /////////////////1st Example with Promise
   examPromise(){
    this.buyLaptop = new Promise((resolve,reject) =>{
       setTimeout(()=>{
        resolve(this.lapTop)
       },3000)
    })
   }
  fetch1(){
    this.buyLaptop?.then((res:any)=>{
      // this.receiveValue=JSON.stringify(res);
      this.receiveValue=res;
      console.log('dsfsdjgb',res);
    })
  }
 
}
