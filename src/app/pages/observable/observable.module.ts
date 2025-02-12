import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { PluckComponent } from './components/pluck/pluck.component';
import { FilterComponent } from './components/filter/filter.component';
import { TapComponent } from './components/tap/tap.component';
import { TakeComponent } from './components/take/take.component';
import { RetryComponent } from './components/retry/retry.component';
import { DebouncetimeComponent } from './components/debouncetime/debouncetime.component';
import { SubjectComponent } from './components/subject/subject.component';
import { Comp1Component } from '../components/comp1/comp1.component';
import { Comp2Component } from '../components/comp2/comp2.component';
import { Comp3Component } from '../components/comp3/comp3.component';
import { ReplaySubjectComponent } from './components/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './components/async-subject/async-subject.component';

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
  {
    path:'pluck', component:PluckComponent
  },
  {
    path:'filter', component:FilterComponent
  },
  {
    path:'tap', component:TapComponent
  },
  {
    path:'take', component:TakeComponent
  },
  {
    path:'retry', component:RetryComponent
  },
  {
    path:'debounce-time', component:DebouncetimeComponent
  },
  {
    path:'subject', component:SubjectComponent
  },
  {
    path:'replay-subject', component:ReplaySubjectComponent
  },
  {
    path:'asyn-subject', component:AsyncSubjectComponent
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
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebouncetimeComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    // CoresModule,
    RouterModule.forChild(routes)
  ],
})
export class ObservableModule { }
