import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor() { }

  printData(val:any, containerId:any){
    let el = document.createElement('li');
    el.innerText = val;
      //For idName 
     document.getElementById(containerId)?.appendChild(el);


    /// For classNAme for multiple div or ul
    // let containers = document.getElementsByClassName('elContainer')
   
    // for (let i = 0; i < containers.length; i++) {
    //   containers[i].appendChild(el.cloneNode(true)); // Use cloneNode to create a new instance
    // }
   }
   private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  start() {
    this.loadingSubject.next(true);
  }

  stop() {
    this.loadingSubject.next(false);
  }
}
