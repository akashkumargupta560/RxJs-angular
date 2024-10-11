import { Component } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  dataArr =[
    {id:1, name:'Akash',gender:'male'},
    {id:2, name:'Rahul',gender:'male'},
    {id:3, name:'Kiran',gender:'female'},
    {id:4, name:'Mohit',gender:'male'},
    {id:5, name:'Karishma',gender:'female'},
    {id:6, name:'Anjali',gender:'female'},
    {id:7, name:'Vicky',gender:'male'},
    {id:8, name:'Avinash',gender:'male'},
    {id:9, name:'Priya',gender:'female'},
    {id:10, name:'Renuka',gender:'female'},
    {id:11, name:'Kartik',gender:'male'},
    {id:12, name:'pooja',gender:'female'},
    {id:13, name:'Akshita',gender:'female'},
    {id:14, name:'ajay',gender:'male'},
    {id:15, name:'shiksha',gender:'female'},
  ]

  userData:any;
  userData2:any;
  userData3:any
  constructor(){}

  ngOnInit():void{
    
    const sources = from(this.dataArr);

    /// Examp -01 Filter By Length
    sources.pipe(
      filter(item => item.name.length > 5),
      toArray(),
    )
    .subscribe((res:any) =>{
      this.userData = res;
      console.log('sadddhd',res)
    });


    /// Examp -01 Filter By Gender

    sources.pipe(
      filter(item => item.gender == 'female'),
      toArray()
    )
    .subscribe((res:any) =>{
      this.userData2 = res;
      console.log('filter by gender', res)
    })

    /// Examp -01 Filter By nth item

    sources.pipe(
      filter(item => item.id <=6 ),
      toArray()
    )
    .subscribe((res:any) =>{
      this.userData3 = res;
      console.log('filter by gender', res)
    })
  }
}   
