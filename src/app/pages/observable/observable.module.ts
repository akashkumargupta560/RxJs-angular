import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from './observable.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes=[
  {
    path:'', component:ObservableComponent
  }
]

@NgModule({
  declarations: [
    ObservableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ObservableModule { }
