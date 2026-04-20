import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementService } from '../../services/element.service';
import { TargetaElementComponent } from '../../components/targeta-element/targeta-element.component';

@Component({
  selector: 'app-cataleg-page',
  standalone: true,
  imports: [CommonModule, TargetaElementComponent],
  templateUrl: './cataleg-page.component.html',
  styleUrl: './cataleg-page.component.scss'
})
export class CatalegPageComponent implements OnInit {

  constructor(public elementService: ElementService) {}

  ngOnInit(): void {
    this.elementService.obtenirPopulars();
  }

  reintentar(): void {
    this.elementService.obtenirPopulars();
  }
}