import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from './observable.component';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './components/all/all.component';
import { FromEventComponent } from './components/from-event/from-event.component';

const routes: Routes=[
  {
    path:'', component:ObservableComponent
  }
]

@NgModule({
  declarations: [
    ObservableComponent,
    AllComponent,
    FromEventComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ObservableModule { }
