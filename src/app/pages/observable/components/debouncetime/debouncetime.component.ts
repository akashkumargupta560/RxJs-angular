import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { RxjsService } from 'src/app/services/rxjs.service';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.scss']
})
export class DebouncetimeComponent implements AfterViewInit {
  
  reqData = null;
  reqData2 = null;
  @ViewChild('myInput') myInput!:ElementRef
  @ViewChild('myInput2') myInput2!:ElementRef
  
  constructor(private loadingBar:RxjsService){}

  ngAfterViewInit():void{

    ///Example--02  DebounceTime
   const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
    map(event => event.target.value),
    debounceTime(500)
  );

   searchTerm.subscribe(res=>{
    console.log('Searching....',res);
    this.reqData = res;
    this.loadingBar.start();
    setTimeout(()=>{
      this.reqData = null;
      this.loadingBar.stop();
    },1000)
   });
    ///Example--02  DebounceTime
    const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(500),
      distinctUntilChanged()
    );
  
     searchTerm2.subscribe(res=>{
      console.log('Searching....',res);
      this.reqData2 = res;
      this.loadingBar.start();
      setTimeout(()=>{
        this.reqData2 = null;
        this.loadingBar.stop();
      },1000)
     })
    
  }

  
}
