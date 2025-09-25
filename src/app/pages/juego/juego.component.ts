import { Component, HostListener } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { NgStyle, NgIf } from '@angular/common';
import { TmplAstRecursiveVisitor } from '@angular/compiler';

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [NavComponent, NgStyle, NgIf],
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.css',
})
export class JuegoComponent {
  openWindows: boolean = false;
  // Posición del jugador
  playerX = 50;
  playerY = 80;

  // Posición del NPC (hombre)
  npcX = 445;
  npcY = 470;

  gameOver = false;

  // Velocidad de movimiento
  speed = 10;

  // Detectar flechas del teclado
  @HostListener('window:keydown', ['$event'])
  handleKey(event: KeyboardEvent) {
    if (this.gameOver) return;

    switch (event.key) {
      case 'ArrowUp':
        this.playerY = Math.max(this.playerY - this.speed, 0);
        break;
      case 'ArrowDown':
        this.playerY = Math.min(this.playerY + this.speed, 350);
        break;
      case 'ArrowLeft':
        this.playerX = Math.max(this.playerX - this.speed, 0);
        break;
      case 'ArrowRight':
        this.playerX = Math.min(this.playerX + this.speed, 560);
        break;
    }

    this.windowOpen();
    this.checkCollision();
  }

  windowOpen() {
    // Dimensiones de la puerta según CSS
    const windowWidth = 80;
    const windowHeight = 60;
    const windowLeft = 600 - 380 - windowWidth; // room width - right - window width
    const windowTop = -10; // room height - height de la puerta
    const windowRight = windowLeft + windowWidth;
    const windowBottom = windowTop + windowHeight;

    // Colisión con puerta
    const hitwindow =
      this.playerX + 10 > windowLeft &&
      this.playerX < windowRight &&
      this.playerY + 10 > windowTop &&
      this.playerY < windowBottom;

    if (hitwindow) {
      this.openWindows = true;
    } else {
      this.openWindows = false;
    }
  }

  // Verificar si el jugador llegó a la puerta
  checkCollision() {
    // Dimensiones de la puerta según CSS
    const doorWidth = 60;
    const doorHeight = 80;
    const doorLeft = 600 - 250 - doorWidth; // room width - right - door width
    const doorTop = 400 - 80; // room height - height de la puerta
    const doorRight = doorLeft + doorWidth;
    const doorBottom = doorTop + doorHeight;

    // Colisión con puerta
    const hitDoor =
      this.playerX + 10 > doorLeft &&
      this.playerX < doorRight &&
      this.playerY + 10 > doorTop &&
      this.playerY < doorBottom;

    // Colisión con NPC
    const npcSize = 40;
    const hitNPC =
      this.playerX + 10 > this.npcX &&
      this.playerX < this.npcX + npcSize &&
      this.playerY + 10 > this.npcY &&
      this.playerY < this.npcY + npcSize;

    if (hitDoor || hitNPC) {
      this.gameOver = true;
    }
  }
}
