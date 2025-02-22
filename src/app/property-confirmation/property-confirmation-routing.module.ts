import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyConfirmationPage } from './property-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyConfirmationPageRoutingModule {}
