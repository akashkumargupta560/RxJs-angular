import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromiseComponent } from './promise.component';
import { Routes, RouterModule } from '@angular/router';
import { OnlyPromiseComponent } from './components/only-promise/only-promise.component';
import { SimplePromiseComponent } from './components/simple-promise/simple-promise.component';
import { DynemicPromiseComponent } from './components/dynemic-promise/dynemic-promise.component';
import { AsynAwaitComponent } from './components/asyn-await/asyn-await.component';

const routes: Routes=[
  {
    path:'', component:PromiseComponent
  },
  {
    path:'simple-promise', component:SimplePromiseComponent
  },
  {
    path:'only-promise', component:OnlyPromiseComponent
  },
  {
    path:'dynemic-promise', component:DynemicPromiseComponent
  },
  {
    path:'asyn-await', component:AsynAwaitComponent
  },
]

@NgModule({
  declarations: [
    PromiseComponent,
    OnlyPromiseComponent,
    SimplePromiseComponent,
    DynemicPromiseComponent,
    AsynAwaitComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PromiseModule { }
