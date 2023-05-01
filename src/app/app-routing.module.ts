import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsComponent } from './ads/ads.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { P404Component } from './p404/p404.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'ads',component:AdsComponent, canActivate:[AuthGuard]},
  {path: '**', component:P404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
