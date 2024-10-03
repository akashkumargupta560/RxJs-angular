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
}
