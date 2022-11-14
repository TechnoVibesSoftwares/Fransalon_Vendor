import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
   
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule),
   // canActivate:[AuthGuard]
  },
  // {
  //   path: 'dashbord',
  //   loadChildren: () => import('./pages/dashbord/dashbord.module').then( m => m.DashbordPageModule)
  // },
  {
    path: 'registersp',
    loadChildren: () => import('./pages/registersp/registersp.module').then( m => m.RegisterspPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'invoices',
    loadChildren: () => import('./pages/invoices/invoices.module').then( m => m.InvoicesPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'serviceslist',
    loadChildren: () => import('./pages/serviceslist/serviceslist.module').then( m => m.ServiceslistPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'offers',
    loadChildren: () => import('./pages/offers/offers.module').then( m => m.OffersPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'emloyee',
    loadChildren: () => import('./pages/emloyee/emloyee.module').then( m => m.EmloyeePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'marketing',
    loadChildren: () => import('./pages/marketing/marketing.module').then( m => m.MarketingPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'report',
    loadChildren: () => import('./pages/report/report.module').then( m => m.ReportPageModule),
    canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
