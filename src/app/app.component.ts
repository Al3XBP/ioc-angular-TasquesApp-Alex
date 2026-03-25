import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Element } from './models/element.model';
import { ELEMENTS_MOCK } from './mocks/dades-mock';
import { BarraCercaComponent } from './components/barra-cerca/barra-cerca.component';
import { LlistaElementsComponent } from './components/llista-elements/llista-elements.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BarraCercaComponent, LlistaElementsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  elements: Element[] = ELEMENTS_MOCK;
  elementsFiltrats: Element[] = ELEMENTS_MOCK;

  constructor() {
    console.log('TasquesApp inicialitzada correctament.');
  }

  actualitzarCerca(text: string): void {
    const textMin = text.toLowerCase();

    this.elementsFiltrats = this.elements.filter(element =>
      element.nom.toLowerCase().includes(textMin)
    );
  }
}