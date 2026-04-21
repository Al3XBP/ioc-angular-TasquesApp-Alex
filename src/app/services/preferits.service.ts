import { Injectable, Signal, computed, signal } from '@angular/core';
import { ElementCataleg } from '../models/element.model';

@Injectable({
  providedIn: 'root'
})
export class PreferitsService {
  private readonly STORAGE_KEY = 'preferits-cataleg';

  private _preferits = signal<ElementCataleg[]>(this.carregarPreferits());

  readonly preferits: Signal<ElementCataleg[]> = this._preferits.asReadonly();
  readonly totalPreferits = computed(() => this._preferits().length);

  private carregarPreferits(): ElementCataleg[] {
    try {
      const dades = localStorage.getItem(this.STORAGE_KEY);
      return dades ? JSON.parse(dades) : [];
    } catch (error) {
      console.error('Error carregant preferits de localStorage', error);
      return [];
    }
  }

  private guardarPreferits(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this._preferits()));
    } catch (error) {
      console.error('Error guardant preferits a localStorage', error);
    }
  }

  afegirPreferit(element: ElementCataleg): void {
    const actuals = this._preferits();

    if (actuals.some(pref => pref.id === element.id)) {
      return;
    }

    this._preferits.set([...actuals, element]);
    this.guardarPreferits();
  }

  eliminarPreferit(id: string): void {
    const actualitzats = this._preferits().filter(pref => pref.id !== id);
    this._preferits.set(actualitzats);
    this.guardarPreferits();
  }

  esPreferit(id: string): boolean {
    return this._preferits().some(pref => pref.id === id);
  }
}