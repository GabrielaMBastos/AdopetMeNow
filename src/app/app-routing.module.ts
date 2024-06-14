import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AltLayoutComponent } from './layouts/alt-layout/alt-layout.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeLoginComponent } from './components/pages/home-login/home-login.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {path: '', component: HomeComponent},
    ]
  },
  {
    path: '',
    component: AltLayoutComponent,
    children: [
      { path: 'home-login', component: HomeLoginComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
