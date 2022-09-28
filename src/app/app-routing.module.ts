import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/modules/auth/pages/login/login.component';

import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [
  {
    path: 'clashroyale',
    loadChildren:() => import ('./components/modules/class-royale/clash-royale.module').then(m => m.ClashRoyaleModule),
    // canLoad: [AuthGuard],
    // canActivate: [AuthGuard] 

  },
  {
    path: 'login',
    //component: LoginComponent,
    loadChildren:() => import ('./components/modules/auth/auth.module').then(m => m.AuthModule),
    //canLoad: [AuthGuard],
    //canActivate: [AuthGuard] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
