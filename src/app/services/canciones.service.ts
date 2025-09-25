import { Injectable } from '@angular/core';
import Canciones from '../models/Canciones';

@Injectable({
  providedIn: 'root',
})
export class CancionesService {
  constructor() {}

  private path = 'assets/images/canciones/';

  private data = [
    {
      name: 'Pensando en tí',
      autor: 'Lua',
      src: this.path + 'pensandoenti.PNG',
      link: 'https://www.youtube.com/watch?v=_6j54PSb6ac&list=RD_6j54PSb6ac&start_radio=1',
    },
    {
      name: 'Ladrona',
      autor: 'Manuel Lizarazo',
      src: this.path + 'ladrona.jpg',
      link: 'https://www.youtube.com/watch?v=SWNaC628sd4&list=RDSWNaC628sd4&start_radio=1',
    },
    {
      name: 'A Thousand Years',
      autor: 'Christian Perri',
      src: this.path + 'thousandyear.PNG',
      link: 'https://www.youtube.com/watch?v=rtOvBOTyX00&list=RDrtOvBOTyX00&start_radio=1',
    },
    {
      name: 'YOTULOKO',
      autor: 'Omar Montes, Rels B',
      src: this.path + 'loco.PNG',
      link: 'https://www.youtube.com/watch?v=8_71Mg4ylXg&list=RD8_71Mg4ylXg&start_radio=1',
    },
    {
      name: 'Luna',
      autor: 'Mario Santander',
      src: this.path + 'luna.PNG',
      link: 'https://www.youtube.com/watch?v=3X9GD_oZBYs&list=RD3X9GD_oZBYs&start_radio=1',
    },
    {
      name: 'Perfect',
      autor: 'Ed Sheeran',
      src: this.path + 'perfect.PNG',
      link: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g&list=RD2Vv-BfVoq4g&start_radio=1',
    },
    {
      name: 'Ropa de bazar',
      autor: 'Ed Maverick',
      src: this.path + 'ropa.PNG',
      link: 'https://www.youtube.com/watch?v=pquJZEwPBjM&list=RDpquJZEwPBjM&start_radio=1',
    },
    {
      name: 'The greatest showman',
      autor: 'A million dream',
      src: this.path + 'million.PNG',
      link: 'https://www.youtube.com/watch?v=Sr3X0DCXI-M&list=RDSr3X0DCXI-M&start_radio=1',
    },
  ];

  canciones = this.data.map((n) => ({
    name: n.name,
    autor: n.autor,
    src: n.src,
    link: n.link,
  }));

  getSong(): Canciones[] {
    return this.canciones;
  }
}
