import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' }, 
  { path: 'splash', loadChildren: () => import('./splash/splash.module').then(m => m.SplashPageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule) },
  {
    path: 'property-upload',
    loadChildren: () => import('./property-upload/property-upload.module').then( m => m.PropertyUploadPageModule)
  },
  {
    path: 'property-confirmation',
    loadChildren: () => import('./property-confirmation/property-confirmation.module').then( m => m.PropertyConfirmationPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'contrato',
    loadChildren: () => import('./contrato/contrato.module').then( m => m.ContratoPageModule)
  },
  {
    path: 'validar-identidad',
    loadChildren: () => import('./validar-identidad/validar-identidad.module').then( m => m.ValidarIdentidadPageModule)
  },
  {
    path: 'metododepago',
    loadChildren: () => import('./metododepago/metododepago.module').then( m => m.MetododepagoPageModule)
  },
  {
    path: 'solicitarvisita',
    loadChildren: () => import('./solicitarvisita/solicitarvisita.module').then( m => m.SolicitarvisitaPageModule)
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
