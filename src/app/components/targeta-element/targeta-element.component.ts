import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface ElementCataleg {
  id: number;
  titol: string;
  descripcio: string;
  categoria: string;
}

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './targeta-element.component.html',
  styleUrl: './targeta-element.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TargetaElementComponent {
  @Input() element!: ElementCataleg;
}