import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { HomeService } from '../../services/home.service';
import Home from '../../models/home';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  welcome: string = '¡Bienvenida a tu pagina!';
  catalogo: Home[] = [];

  constructor(private homeService: HomeService) {
    this.catalogo = homeService.getCard();
  }
}
