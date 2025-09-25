import { Injectable } from '@angular/core';
import Image from '../models/Image';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  path = 'assets/images/cartas/';
  images = [
    {
      src: this.path + '3.jpeg',
      alt: 'Foto 3',
      title: 'Callejon del beso',
      subtitle: 'Estaba mejor el 5to escalón',
      slide: 'Slide 3',
      number: 3,
      fs: 'white',
    },
    {
      src: this.path + '4.jpeg',
      alt: 'Foto 4',
      title: 'Comida mexicana',
      subtitle: 'Combinamos outfits sin darnos cuenta',
      slide: 'Slide 4',
      number: 4,
      fs: 'white',
    },
    {
      src: this.path + '5.jpeg',
      alt: 'Foto 5',
      title: 'Zoologico',
      subtitle: '🐍Primera vez de 🦈 Natalia en uno🦒',
      slide: 'Slide 5',
      number: 5,
      fs: 'black',
    },
    {
      src: this.path + '16.jpeg',
      alt: 'Foto 16',
      title: '¿Policia?',
      subtitle: '¿Pero me presenta a sus amigos?',
      slide: 'Slide 16',
      number: 16,
      fs: 'white',
    },
  ];

  images2 = [
    {
      src: this.path + '10.jpeg',
      alt: 'Foto 10',
      title: 'Guanajuato 🗺📍🗺 con mi familia',
      subtitle: 'Comí de todos, NO ME ARREPIENTO',
      slide: 'Slide 10',
      number: 10,
      fs: 'black',
    },
    {
      src: this.path + '2.jpeg',
      alt: 'Foto 2',
      title: 'Natalia modo perro',
      subtitle: 'La vestí con mi disfraz de perro',
      slide: 'Slide 2',
      number: 2,
      fs: 'white',
    },
    {
      src: this.path + '6.jpeg',
      alt: 'Foto 6',
      title: 'Los 150cm',
      subtitle: '¿Quien es más alto?',
      slide: 'Slide 6',
      number: 6,
      fs: 'black',
    },
    {
      src: this.path + '7.jpeg',
      alt: 'Foto 7',
      title: 'Encantadora de osos',
      subtitle: 'No se subío al oso por pena',
      slide: 'Slide 7',
      number: 7,
      fs: 'black',
    },
    {
      src: this.path + '12.jpeg',
      alt: 'Foto 12',
      title: 'Mucha chamara',
      subtitle: 'Te queda enorme',
      slide: 'Slide 12',
      number: 12,
      fs: 'white',
    },
  ];

  getImage(): Image[] {
    return this.images;
  }

  getImage2(): Image[] {
    return this.images2;
  }
}
