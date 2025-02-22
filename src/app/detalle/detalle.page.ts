import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: false
})
export class DetallePage implements OnInit {
  propiedad: any = { imagenes: [] };
  imagenActualIndex: number = 0;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    // Verifica si hay datos en history.state.propiedad
    // if (history.state && history.state.propiedad) {
    //   this.propiedad = history.state.propiedad;
    // } else {
      this.propiedad = {
        tipo: 'Casa',
        precio: 2000,
        imagenes: [
          'assets/image.png',
          'assets/image.png',
          'assets/image.png'
        ],
        servicios: [
          { nombre: 'Wifi', icono: 'wifi' },
          { nombre: 'Gas', icono: 'flame' }
        ],
        descripcion: 'Se renta casa de 1 piso para estudiante, cuenta con 1 baño completo, 1 recámara, cocina, área para comedor y estacionamiento para 1 carro.',
        direccion: 'Av. Pie de la Cuesta 2501, Nacional, 76148 Santiago de Querétaro, Qro.'
      };
    // }

    if (this.propiedad.imagenes.length > 0) {
      this.imagenActualIndex = 0;
    }

    console.log('Propiedad cargada:', this.propiedad);
  }

  cambiarImagen(direccion: number) {
    const totalImagenes = this.propiedad.imagenes.length;
    if (totalImagenes > 0) {
      this.imagenActualIndex = (this.imagenActualIndex + direccion + totalImagenes) % totalImagenes;
    }
  }

  handleImageError() {
    console.error('Error: La imagen no se pudo cargar:', this.propiedad.imagenes[this.imagenActualIndex]);
  }
}
