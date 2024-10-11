import { Component } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent {
  
  tableHeaders = [
    {header:'Name',columns:'name'},
    {header:'Skills',columns:'skills'},
  ];
  userData:any;
  userData2:any;

  constructor(){}
 users =[
  {
    name:'akash',
    skills:'Angular',
    job:{
      title:'Frontend Developer',
      exp:'3 years'
    }
  },
  {
    name:'vicky',
    skills:'java',
    job:{
      title:'Backend Developer',
      exp:'6 years'
    }
  },
  {
    name:'avinash',
    skills:'reactjs',
    job:{
      title:'Frontend Developer',
      exp:'5 years'
    }
  },
  {
    name:'anshu',
    skills:'Php',
    job:{
      title:'Backend Developer',
      exp:'4 years'
    }
  },
  {
    name:'rohit',
    skills:'flutter',
    job:{
      title:'Android Developer',
      exp:'2 years'
    }
  },
 ]
  ngOnInit():void{

    /////Example - 01

    from(this.users).pipe(
      //map(data=> data.name ),
      pluck('name'),
      toArray())
    .subscribe(res =>{
      console.log('data',res);
      this.userData =res;
    })
    // from(this.users).pipe(toArray()) // this is for shared table
    // .subscribe(res =>{
    //   console.log('data',res);
    //   this.userData =res;
    // })


    ///Example-- 02
    from(this.users).pipe(
      //map(data=> data.name ),
      pluck('job','title'),
      toArray())
    .subscribe(res =>{
      console.log('data',res);
      this.userData2 =res;
    })
  }



  handleRowClick(row: any) {
    console.log('Row clicked:', row); // Handle the row click event
  }

}
