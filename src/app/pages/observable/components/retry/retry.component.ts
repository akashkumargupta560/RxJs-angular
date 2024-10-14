import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent {

  //value: any = [];
   person:any;
   fetchingData:boolean = false;
   status:string ='No Data'
  tableHeaders = [
    {header:'Id',columns:'id'},
    {header:'Name',columns:'name'},
    {header:'Email',columns:'email'},
    {header:'Phone',columns:'phone'}
  ];

  constructor(private http:HttpClient){}
  ngOnInit():void{
    //this.fetchDetails()
  }
  fetchDetails(){
    this.fetchingData = true;
    this.http.get<any>('https://jsonplaceholder.typicode.com/users').pipe(

      //retry(2);
      retryWhen(err =>err.pipe(
        delay(3000),
        scan(retryCount=>{
          if(retryCount >=5){
            throw err;
          }else{
            retryCount = retryCount + 1
            console.log('retryCount==>'+ retryCount);
            this.status ='Retrying Attempt #'+ retryCount
            return retryCount
          }
        },0)
      ))
    )
    .subscribe((res)=>{
     
     // this.value =res;
     setTimeout(()=>{
      this.person =res;  // for testing to use setTimeout() method
      this.fetchingData = false;
      this.status ='Data Fetched!';
       console.log(this.person)
     },5000)
    //  this.person =res;
    //  this.fetchingData = false
    //this.status ='Data Fetched!';
    //   console.log(this.person)
    },
    (err) =>{
      console.log(err)
      this.fetchingData = false
      this.status ='Problem Fetching Data!';
    }
  
    )
  }

  handleRowClick(row: any) {
    console.log('Row clicked:', row); // Handle the row click event category price title
  }
}
