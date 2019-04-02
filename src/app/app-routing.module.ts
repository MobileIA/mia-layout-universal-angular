import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemComponent } from './pages/system/system.component';
import { LoginComponent } from 'projects/mobileia/layout-universal/src/lib/pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: SystemComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      'success_route' : '',
      'image_logo': 'assets/images/logo-login.png'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
