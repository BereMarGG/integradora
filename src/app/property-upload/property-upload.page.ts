import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-property-upload',
  templateUrl: './property-upload.page.html',
  styleUrls: ['./property-upload.page.scss'],
  standalone: false
})
export class PropertyUploadPage {
  googleMapUrl: string = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAeAPQEqCfKYwd8C6ZewS_amcJ7Xm6RDvA&q=Querétaro,México';
  propertyType: string = '';
  rooms: number = 1;
  bathrooms: number = 1;
  parking: number = 0;
  water: boolean = false;
  electricity: boolean = false;
  internet: boolean = false;
  gas: boolean = false;
  ineSelected: boolean = false;
  passportSelected: boolean = false;
  documentPreview: string | ArrayBuffer | null = null;
  additionalSpecs: string = '';  // 🔹 Agrega esta línea

  constructor(private navCtrl: NavController) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.documentPreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  publish() {
    console.log('Propiedad publicada:', {
      tipo: this.propertyType,
      habitaciones: this.rooms,
      baños: this.bathrooms,
      estacionamiento: this.parking,
      especificaciones_adicionales: this.additionalSpecs, // 🔹 Incluye en la salida
      servicios: {
        agua: this.water,
        luz: this.electricity,
        internet: this.internet,
        gas: this.gas
      },
      identidad: {
        ine: this.ineSelected,
        pasaporte: this.passportSelected
      },
      documento: this.documentPreview
    });
    this.navCtrl.navigateForward('/property-confirmation');
  }
}
