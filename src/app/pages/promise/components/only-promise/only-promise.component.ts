import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'web-only-promise',
  templateUrl: './only-promise.component.html',
  styleUrls: ['./only-promise.component.scss']
})
export class OnlyPromiseComponent {
  value:any;
  constructor(private userSrv:UsersService){}

  ngOnInit():void{}
  
  getDetails(){
    this.userSrv.fetchDetails().then(res=>{
      this.value = res;
      console.log( 'get data',this.value)
    }).catch(err=>{
      console.log(err)
    })
  }

  tableHeaders = ['Name', 'Age', 'Occupation'];
  tableData = [
    { Name: 'Alice', Age: 30, Occupation: 'Engineer' },
    { Name: 'Bob', Age: 25, Occupation: 'Designer' },
    { Name: 'Charlie', Age: 35, Occupation: 'Teacher' }
  ];

  handleRowClick(row: any) {
    console.log('Row clicked:', row); // Handle the row click event
  }
}
