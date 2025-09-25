import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { CancionesService } from '../../services/canciones.service';
import Canciones from '../../models/Canciones';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-canciones',
  standalone: true,
  imports: [NavComponent, NgFor, NgClass],
  templateUrl: './canciones.component.html',
  styleUrl: './canciones.component.css',
})
export class CancionesComponent {
  back: boolean = true;
  canciones: Canciones[] = [];
  constructor(private cancionesService: CancionesService) {
    this.canciones = cancionesService.getSong();
  }
}
