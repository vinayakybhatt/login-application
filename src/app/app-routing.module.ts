import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { LifeCycleComponent } from './lifecycle/lifecycle.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'logIn', component: LogInComponent},
  {path: 'lifecycle', component: LifeCycleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
