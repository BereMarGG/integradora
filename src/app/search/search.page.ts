import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: false
})
export class SearchPage implements OnInit {
  filtroTipo: string = '';
  filtroUniversidad: string = '';
  filtroPrecio: number[] = [2000, 10000];

  propiedades: any[] = []; // Se inicializa vacío

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.cargarPropiedades();
  }

  cargarPropiedades() {
    const savedProperties = JSON.parse(localStorage.getItem('properties') || '[]');
    this.propiedades = savedProperties.map((p: any) => ({
      tipo: p.tipo,
      precio: p.especificaciones_adicionales.includes('precio') ? parseInt(p.especificaciones_adicionales.split(':')[1]) : 5000, // Si hay precio en especificaciones, úsalo
      universidad: 'Desconocida', // Puedes agregar un campo para universidad en PropertyUploadPage si es necesario
      distancia: Math.random() * 10, // Puedes ajustar esto
      imagen: 'assets/casa.png' // Usa una imagen por defecto o permite que el usuario suba una
    }));
  }

  verDetalle(propiedad: any) {
    this.navCtrl.navigateForward(['/detalle'], { state: { propiedad } });
  }

  aplicarFiltros() {
    return this.propiedades.filter(p =>
      (!this.filtroTipo || p.tipo === this.filtroTipo) &&
      p.precio >= this.filtroPrecio[0] && p.precio <= this.filtroPrecio[1]
    );
  }
}
