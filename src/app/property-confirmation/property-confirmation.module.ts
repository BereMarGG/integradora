import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertyConfirmationPageRoutingModule } from './property-confirmation-routing.module';

import { PropertyConfirmationPage } from './property-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertyConfirmationPageRoutingModule
  ],
  declarations: [PropertyConfirmationPage]
})
export class PropertyConfirmationPageModule {}
