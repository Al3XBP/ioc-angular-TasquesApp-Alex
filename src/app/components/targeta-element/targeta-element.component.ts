import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementCataleg } from '../../models/element-cataleg.model';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './targeta-element.component.html',
  styleUrl: './targeta-element.component.scss'
})
export class TargetaElementComponent {
  @Input() element!: ElementCataleg;
}
