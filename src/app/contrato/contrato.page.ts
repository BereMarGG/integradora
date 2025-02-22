import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.page.html',
  styleUrls: ['./contrato.page.scss'],
  standalone: false
})
export class ContratoPage {
  constructor(private navCtrl: NavController) {}

  siguiente() {
    this.navCtrl.navigateForward('/validar-identidad');
  }
}
