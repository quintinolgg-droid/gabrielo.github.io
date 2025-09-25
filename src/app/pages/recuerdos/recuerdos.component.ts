import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { RecuerdosService } from '../../services/recuerdos.service';
import Recuerdos from '../../models/Recuerdos';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recuerdos',
  standalone: true,
  imports: [NavComponent, NgFor, RouterLink, CommonModule],
  templateUrl: './recuerdos.component.html',
  styleUrl: './recuerdos.component.css',
})
export class RecuerdosComponent implements AfterViewInit {
  recuerdos: Recuerdos[] = [];
  constructor(private recuerdosService: RecuerdosService) {
    this.recuerdos = recuerdosService.getRecuerdos();
  }

  @ViewChildren('fadeCard', { read: ElementRef })
  fadeCards!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 } // 10% del elemento visible para activar
    );

    this.fadeCards.forEach((card) => observer.observe(card.nativeElement));
  }
}
