import { Injectable } from '@angular/core';
import Home from '../models/home';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  private data = [
    {
      title: 'Isabel Natalia Gomez Lopez',
      body: 'En esta página encontrarás un rincón muy especial hecho solo para nosotros, un espacio donde guardaremos recuerdos de todo lo que hemos vivido juntos. Aquí estarán las pequeñas cosas que hacen grande nuestra relación: fotos, palabras, momentos y detalles que forman parte de nuestra historia de amor. La idea es que cada vez que entres, puedas revivir esas sonrisas, esas aventuras, y hasta los instantes más sencillos que se vuelven mágicos cuando los compartimos. Será como un álbum vivo de nuestro noviazgo, donde iremos sumando recuerdos, sueños y promesas que queremos cumplir. Este lugar es nuestro refugio digital, un recordatorio de lo hermoso que es caminar de la mano, crecer juntos y seguir construyendo un futuro lleno de amor.',
    },
    {
      title: '24 de Marzo del 2024',
      body: 'Día que te pedi ser mi novia, aún teniendo muchos retos en el camino, buscando el mejor lugar. Donde hasta nos grabaron sin nuestra autorización, llevando un ramo de flores en  la parte trasera del coche para pdoer dartelo de una forma especial pero todo terminaba saliendo mal al punto que me ganaron los nervios y solo dije ten ya, y empece a llorar internamente pero te amo aunque nunca me salga nada bien. Esta relación e slo mejor que tengo en mi vida. Realmente desde que te conocí fue y será una grna historia en mi vida donde se que tengo en quien apoyarme y sentirme especial al lado de alguien, estare a tu lado cada dia que lo necesites auún estando en mi peor o mejor momento. Orgullo y compromiso de México.',
    },
    {
      title: 'Nuestra primera cita',
      body: 'Todo comenzo saliendo de tu casa y a la primnera vuelta casi una vieja mensa nos choca por andar discutiendo por otro con el que casi choca. despues fuímos a soriana por snacks pero se me olvido mi cartera y me regrese al coche en fa, como rayo mcqueen CUCHAO, compramos y nos retiramos a dar la vuelta en el coche, pasamos al oxxo por unas bebidas y seguimos con el viaje. Tratando de ir a un lugar bonito casi el coche se atora y decidimos mejor no ir. AVanzando cheque si el carro no le habia pasado nada y tú me tiraste quitando mi mano del coche y me caí (gracias...), por ultimo, fuimos a jugar hockey de aire donde gane yo, y fue nuestro primer beso en la mejilla. Terminando dandote una  carta en un sobre rojo que decia algunos senitmientos de mi parte hacia tu persona.',
    },
    {
      title: 'Nuestro lazo eterno, poema no propio sin fines legales',
      body: 'Entre tus manos encontré refugio, y en tu mirada descubrí un universo donde todo tiene sentido. Somos dos almas que se buscan y se encuentran una y otra vez, aun cuando el mundo parezca girar en contra. Tu risa se ha vuelto mi melodía favorita, y tus abrazos mi lugar seguro, donde el tiempo se detiene y solo existe el nosotros. Esta historia que compartimos no es casualidad, es destino, un camino tejido con hilos de amor, paciencia y complicidad. Prometo caminar contigo en cada paso, sostener tu mano en cada caída y celebrar contigo cada victoria. Porque amarte no es solo sentir, es también vivir, construir y soñar juntos un futuro que siempre será nuestro.',
    },
  ];

  cards = this.data.map((n) => ({
    title: n.title,
    body: n.body,
  }));

  getCard(): Home[] {
    return this.cards;
  }
}
