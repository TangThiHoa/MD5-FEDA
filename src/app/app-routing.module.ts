import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./components/pages/user/login/login.component";
import {RegisterComponent} from "./components/pages/user/register/register.component";
import {LayoutComponent} from "./components/layout/layout.component";


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'users',
    component:LayoutComponent,
    loadChildren: () => import('./module/layout.module').then(module => module.LayoutModule)
  },
  {
    path: '',
    component:LayoutComponent,
    loadChildren: () => import('./module/layout.module').then(module => module.LayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
