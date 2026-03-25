import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ELEMENTS_MOCK } from './mocks/dades-mock';
import { Element } from './models/element.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  elements: Element[] = ELEMENTS_MOCK;

  constructor() {
    console.log('TasquesApp inicialitzada correctament.');
  }
}