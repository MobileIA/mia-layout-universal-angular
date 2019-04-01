import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemComponent } from './pages/system/system.component';
import { LoginComponent } from 'projects/mobileia/layout-universal/src/lib/pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: SystemComponent,
    children: []
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      'success_route' : 'index'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
