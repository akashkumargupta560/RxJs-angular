import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent {

  //value: any = [];
   person:any;
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
    this.http.get<any>('https://jsonplaceholder.typicode.com/users').subscribe(res=>{
     
     // this.value =res;
     this.person =res;
      console.log(this.person)
    })
  }

  handleRowClick(row: any) {
    console.log('Row clicked:', row); // Handle the row click event category price title
  }
}
