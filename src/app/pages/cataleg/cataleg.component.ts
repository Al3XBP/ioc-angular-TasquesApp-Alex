import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TargetaElementComponent, ElementCataleg } from '../../components/targeta-element/targeta-element.component';

@Component({
  selector: 'app-cataleg',
  standalone: true,
  imports: [ScrollingModule, TargetaElementComponent],
  templateUrl: './cataleg.component.html',
  styleUrl: './cataleg.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalegComponent {
  alturaElement = 160;

  elements: ElementCataleg[] = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    titol: `Element ${index + 1}`,
    descripcio: `Descripció de prova de l'element ${index + 1}`,
    categoria: index % 2 === 0 ? 'General' : 'Tasques'
  }));
}