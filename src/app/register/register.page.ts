import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage {
  userType: string = '';

  constructor(private navCtrl: NavController) {}

  register() {
    if (this.userType === 'landlord') {
      this.navCtrl.navigateForward('/property-upload'); // Redirige a la pantalla de carga de propiedad
    } else {
      this.navCtrl.navigateForward('/search'); // Redirige a la página principal para estudiantes
    }
  }
}
