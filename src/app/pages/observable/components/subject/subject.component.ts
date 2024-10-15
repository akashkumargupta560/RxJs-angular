import { Component, OnDestroy, OnInit } from '@angular/core';
import { RxjsService } from 'src/app/services/rxjs.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {
  
  userName:any;

  constructor(private _rxjsSrv:RxjsService){
    this._rxjsSrv.userName.subscribe(res=>{
      this.userName = res;
    });
  }
  ngOnInit():void{
    this._rxjsSrv.exclusive.next(true);
  }
  ngOnDestroy(): void {
    this._rxjsSrv.exclusive.next(false);
  }
}
