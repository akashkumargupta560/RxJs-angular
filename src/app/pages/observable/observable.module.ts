import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from './observable.component';
import { Routes, RouterModule } from '@angular/router';
// import { ListComponent } from './components/list/list.component';
import { FromEventComponent } from './components/from-event/from-event.component';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes=[
  {
    path:'observable', component:ObservableComponent
  },
  {
    path:'', component:ListComponent
  },
  {
    path:'from-event', component:FromEventComponent
  }
]

@NgModule({
  declarations: [
    ObservableComponent,
    ListComponent,
    FromEventComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ObservableModule { }
