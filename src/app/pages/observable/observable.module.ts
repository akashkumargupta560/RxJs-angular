import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from './observable.component';
import { Routes, RouterModule } from '@angular/router';
import { FromEventComponent } from './components/from-event/from-event.component';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IntervalComponent } from './components/interval/interval.component';
import { OfFromComponent } from './components/of-from/of-from.component';
import { ToArrayComponent } from './components/to-array/to-array.component';
import { CustomObservableComponent } from './components/custom-observable/custom-observable.component';
import { MapComponent } from './components/map/map.component';


const routes: Routes=[
  {
    path:'', component:ObservableComponent
  },
  {
    path:'fd', component:ListComponent
  },
  {
    path:'from-event', component:FromEventComponent
  },
  {
    path:'interval-timer', component:IntervalComponent
  },
  {
    path:'of-from', component:OfFromComponent
  },
  {
    path:'toArray', component:ToArrayComponent
  },
  {
    path:'custom-observ', component:CustomObservableComponent
  },
  {
    path:'map', component:MapComponent
  },
]

@NgModule({
  declarations: [
    ObservableComponent,
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ObservableModule { }
