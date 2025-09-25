import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CancionesComponent } from './pages/canciones/canciones.component';
import { FotosComponent } from './pages/fotos/fotos.component';
import { RecuerdosComponent } from './pages/recuerdos/recuerdos.component';
import { JuegoComponent } from './pages/juego/juego.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'juego', component: JuegoComponent },
  { path: 'canciones', component: CancionesComponent },
  { path: 'fotos', component: FotosComponent },
  { path: 'recuerdos', component: RecuerdosComponent },
];
