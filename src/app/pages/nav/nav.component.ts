import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  tabs = [
    { name: 'Recuerdos', target: '#pills-recuerdos', route: '/recuerdos' },
    { name: 'Canciones', target: '#pills-canciones', route: '/canciones' },
    { name: 'Fotos', target: '#pills-Fotos', route: '/fotos' },
    { name: 'Juegos', target: '#pills-juegos', route: '/juego' },
  ];
  activeIndex = 0;
}
