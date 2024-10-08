import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './pages/observable/observable.component';
import { ListComponent } from './pages/observable/components/list/list.component';
import { FromEventComponent } from './pages/observable/components/from-event/from-event.component';

const routes: Routes = [
  {
    path:'', redirectTo:'dashboard', pathMatch:'full'
  },
  {
    path:'dashboard',
    loadChildren:() => import('./pages/dashboard/dashboard.module').then((m)=>m.DashboardModule)
  },
  {
    path:'home',
    loadChildren:()=> import('./pages/home/home.module').then((m)=>m.HomeModule)
  },
  {
    path:'profile',
    loadChildren:() => import('./pages/profile/profile.module').then((m)=>m.ProfileModule)
  },
  {
    path:'promise',
    loadChildren:() => import('./pages/promise/promise.module').then((m)=>m.PromiseModule)
  },
  {
    path:'observable',
    loadChildren:() => import('./pages/observable/observable.module').then((m)=>m.ObservableModule)
  },
  // {
  //   path:'observable', component:ObservableComponent,
  //   children:[
  //     {
  //       path:'list', component:ListComponent
  //     },
  //     {
  //       path:'from-event', component:FromEventComponent
  //     },
  //   ]
    
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
