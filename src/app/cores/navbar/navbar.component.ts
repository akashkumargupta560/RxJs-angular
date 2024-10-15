import { Component, OnInit } from '@angular/core';
import { RxjsService } from 'src/app/services/rxjs.service';

@Component({
  selector: 'web-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  exclusive:boolean= false;

  constructor(private ngRxjSrv:RxjsService){}
  
  ngOnInit():void{
    this.ngRxjSrv.exclusive.subscribe(res=>{
      this.exclusive = res
    })
  }
}
