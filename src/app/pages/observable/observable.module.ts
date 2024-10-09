import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from './observable.component';
import { Routes, RouterModule } from '@angular/router';
import { FromEventComponent } from './components/from-event/from-event.component';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IntervalComponent } from './components/interval/interval.component';
import { OfFromComponent } from './components/of-from/of-from.component';


const routes: Routes=[
  {
    path:'observable', component:ObservableComponent
  },
  {
    path:'', component:ListComponent
  },
  {
    path:'from-event', component:FromEventComponent
  },
  {
    path:'interval-timer', component:IntervalComponent
  },
  {
    path:'of-from', component:OfFromComponent
  }
]

@NgModule({
  declarations: [
    ObservableComponent,
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ObservableModule { }
