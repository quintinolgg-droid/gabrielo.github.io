import { Injectable } from '@angular/core';
import Recuerdos from '../models/Recuerdos';

@Injectable({
  providedIn: 'root',
})
export class RecuerdosService {
  constructor() {}

  private path = 'assets/images/recuerdos/';
  data = [
    {
      title: 'Los Sky',
      body: 'Fue nuestra primera cita, inolvidable compramos los sky´s en el oxxo por el itsur, mientras dabamos la vuelta. Fue una travecia toda esa cita pero al final salimos vivimos. Para mi eos fue una win con la suerte que téniamos ese día.',
      src: this.path + 'sky.PNG',
      date: new Date(2024, 2, 14),
    },
    {
      title: 'Confesión',
      body: 'Fue la primera carta que me diste, fue por el día de san valentin. Curioso que yo era de los que estaban checando esas cosas y me la dio un amigo jaja. Pero fue muy lindo detalle, gracias.',
      src: this.path + 'confesion.PNG',
      date: new Date(2024, 2, 21),
    },
    {
      title: 'Sombrillas',
      body: 'Fuímos al jardín a tomar algo, compramos unas limonadas. La mía estaba más buena que la tuya y decdiste robarme la mía. Ese día aun recuerdo, lo que compraste sabía bien feo pero me la pase muy bien contigo.',
      src: this.path + 'sombrilla.PNG',
      date: new Date(2024, 3, 21),
    },
    {
      title: 'Carta de amor',
      body: 'Una carta de amor, donde me comentaste tus sentimientos hacia mi persona dentro de la relación, siendo un lindo detalle y emotivo. Agradezco pór abrirte conmigo aún en este momento se te hacia dificil.',
      src: this.path + 'amor.PNG',
      date: new Date(2024, 10, 21),
    },
    {
      title: 'Mensajito',
      body: 'En el gym mientras no miraba mi mochila. Metiste este emnsajito que dice "Te amo", realmente fue algo que me sorprendio pero me saco una sonrisa y argadezco el timepo por escribirlo y meterlo en mi mochila para darmelo.',
      src: this.path + 'hoja.PNG',
      date: new Date(2024, 12, 21),
    },
    {
      title: 'Batman',
      body: 'Fuimos a las cosas chinas y viste que veia mucho un peluche de batman me dijiste que si lo queria, al final lo compre yo pero me gusto mucho que estuvieras ahí y vieras como ea parte infantil mía de nuevo.',
      src: this.path + 'bats.PNG',
      date: new Date(2024, 12, 3),
    },
    {
      title: 'Naruto',
      body: 'En mi cumpleaños en Morelia me sorprendiste con un cuarto arreglado y regalos para mí, realmente nadie habia hecho algo asi por mí y perdón por no saber como reaccionar solo que realmente no estaba acostumbado a esas cosas. Te amo.',
      src: this.path + 'naruto.PNG',
      date: new Date(2025, 1, 3),
    },
    {
      title: 'Cartera',
      body: 'Tenía una cartera ya algo fea, me sorprendiste comprandome una nueva cartera para usar, donde metí una foto tuya y cada vez que la usaba, era lindo pensar en la persona que me la obsequio con tanto cariño.',
      src: this.path + 'cartera.PNG',
      date: new Date(2025, 1, 3),
    },
    {
      title: 'Batman llavero',
      body: 'Sabiendo que mi super hereo favorito es batman, buscaste algo para darme y mostrarme que aunque fuera algo infantil, al ver que es importante para mí. Buscaste darme un detalle muy lindo de tu parte a mi niño interior.',
      src: this.path + 'batman.PNG',
      date: new Date(2025, 2, 21),
    },
    {
      title: 'Tolantongo',
      body: 'Fuímos a un concierto de musica electronica y acampar, termino siendo algo dificil por las lluvias pero realmente era muy necesario para relajarnos y tener un tiempo a solas juntos, aunque te enfermaras debílucha',
      src: this.path + 'piedra.PNG',
      date: new Date(2025, 6, 15),
    },
  ];

  recuerdos = this.data.map((n) => ({
    title: n.title,
    body: n.body,
    src: n.src,
    date: n.date,
  }));

  getRecuerdos(): Recuerdos[] {
    return this.recuerdos;
  }
}
