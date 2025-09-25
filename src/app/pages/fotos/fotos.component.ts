import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import Image from '../../models/Image';
import { ImageService } from '../../services/image.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-fotos',
  standalone: true,
  imports: [NavComponent, NgFor],
  templateUrl: './fotos.component.html',
  styleUrl: './fotos.component.css',
})
export class FotosComponent {
  images: Image[] = [];
  images2: Image[] = [];
  constructor(private imageService: ImageService) {
    this.images = imageService.getImage();
    this.images2 = imageService.getImage2();
  }

  activeIndex = 0; // índice de la slide activa

  onSlide(event: any) {
    this.activeIndex = event.to; // evento que da el índice de la nueva slide
  }

  activeIndex2 = 0; // índice de la slide activa

  onSlide2(event: any) {
    this.activeIndex2 = event.to; // evento que da el índice de la nueva slide
  }
}
