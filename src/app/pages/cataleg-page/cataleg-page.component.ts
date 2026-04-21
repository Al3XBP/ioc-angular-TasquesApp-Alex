import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementService } from '../../services/element.service';
import { TargetaElementComponent } from '../../components/targeta-element/targeta-element.component';
import { FormulariCercaComponent } from '../../components/formulari-cerca/formulari-cerca.component';
import { PreferitsService } from '../../services/preferits.service';

@Component({
  selector: 'app-cataleg-page',
  standalone: true,
  imports: [CommonModule, TargetaElementComponent, FormulariCercaComponent],
  templateUrl: './cataleg-page.component.html',
  styleUrl: './cataleg-page.component.scss'
})
export class CatalegPageComponent implements OnInit {
  constructor(
    public elementService: ElementService,
    public preferitsService: PreferitsService
  ) {}

  ngOnInit(): void {
    this.elementService.obtenirPopulars();
  }

  reintentar(): void {
    this.elementService.obtenirPopulars();
  }

  gestionarCerca(terme: string): void {
    const text = terme.trim();

    if (text === '') {
      this.elementService.obtenirPopulars();
      return;
    }

    this.elementService.cercar(text);
  }
}