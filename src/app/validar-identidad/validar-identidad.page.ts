import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-validar-identidad',
  templateUrl: './validar-identidad.page.html',
  styleUrls: ['./validar-identidad.page.scss'],
  standalone: false
})
export class ValidarIdentidadPage {
  documentoSeleccionado: string = '';
  ineFrontal: string | null = null;
  ineReverso: string | null = null;

  constructor(private navCtrl: NavController) {}

  async tomarFoto(tipo: 'frontal' | 'reverso') {
    const imagen = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
    });

    if (tipo === 'frontal') {
      this.ineFrontal = imagen.dataUrl!;
    } else {
      this.ineReverso = imagen.dataUrl!;
    }
  }

  cargarImagen(event: any, tipo: 'frontal' | 'reverso') {
    const archivo = event.target.files[0];
    if (archivo) {
      const lector = new FileReader();
      lector.onload = () => {
        if (tipo === 'frontal') {
          this.ineFrontal = lector.result as string;
        } else {
          this.ineReverso = lector.result as string;
        }
      };
      lector.readAsDataURL(archivo);
    }
  }

  siguiente() {
    this.navCtrl.navigateForward('/metododepago');
  }
}