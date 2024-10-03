import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dynemic-promise',
  templateUrl: './dynemic-promise.component.html',
  styleUrls: ['./dynemic-promise.component.scss']
})
export class DynemicPromiseComponent {


  value:any[] =[];
  // limitedData: any[] = [];
  currentPage = 1;
  itemsPerPages =10; //Number of image per page
  constructor(private userSrv:UsersService){}

  ngOnInit():void{
    this.getDetails();
  }
  
  getDetails(){
    this.userSrv.fetchDetails().then(res=>{
      this.value = res;
      console.log( 'get data',this.value)
    }).catch(err=>{
      console.log(err)
    })
  }

  /////////Pagination
  get paginationData():any[]{
    const startIndex =(this.currentPage-1)* this.itemsPerPages;
    return this.value.slice(startIndex, startIndex + this.itemsPerPages);
  }
  nextPage():void{
    if(this.currentPage < Math.ceil(this.value.length/this.itemsPerPages)){
      this.currentPage++;
    }
  }

  prevPage(): void{
    if(this.currentPage > 1){
      this.currentPage--;
    }
  }
}
