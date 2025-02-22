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

  propiedades = [
    { tipo: 'casa', precio: 5000, universidad: 'uaq', distancia: 2.5, imagen: 'assets/image.png' },
    { tipo: 'departamento', precio: 7000, universidad: 'itq', distancia: 3.0, imagen: 'assets/image.png' },
    { tipo: 'cuarto', precio: 3000, universidad: 'uvm', distancia: 1.2, imagen: 'assets/image.png' },
    { tipo: 'casa', precio: 6000, universidad: 'uteq', distancia: 4.0, imagen: 'assets/image.png' }
  ];

  constructor(private navCtrl: NavController) {}

  verDetalle(propiedad: any) {
    this.navCtrl.navigateForward(['/detalle'], { state: { propiedad } });
  }  

  ngOnInit() {
  }

  aplicarFiltros() {
    return this.propiedades.filter(p =>
      (!this.filtroTipo || p.tipo === this.filtroTipo) &&
      (!this.filtroUniversidad || p.universidad === this.filtroUniversidad) &&
      p.precio >= this.filtroPrecio[0] && p.precio <= this.filtroPrecio[1]
    );
  }
}