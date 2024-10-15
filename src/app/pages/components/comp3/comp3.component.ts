import { Component } from '@angular/core';
import { RxjsService } from 'src/app/services/rxjs.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component {

  userName:any;
  constructor(private _rxjsSrv:RxjsService){
    this._rxjsSrv.userName.subscribe(res=>{
      this.userName = res;
    });
  }
  ngOnInit():void{}

  saveChange(uname:any){
    //alert('hello ');
    console.log(uname.value);
    this._rxjsSrv.userName.next(uname.value)

  }
}
