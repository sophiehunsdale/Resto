import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { ListRestroComponent } from './list-restro/list-restro.component';
import { UpdateRestroComponent } from './update-restro/update-restro.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    component: AddRestoComponent,
    path: 'add'
  },
  {
    component: ListRestroComponent,
    path: 'list'
  },
  {
    component: UpdateRestroComponent,
    path: 'update'
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: RegisterComponent,
    path: 'register'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
