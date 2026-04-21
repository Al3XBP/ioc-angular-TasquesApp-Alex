import { Injectable, Signal, computed, signal } from '@angular/core';
import { ElementCataleg, PreferitElement } from '../models/element.model';

@Injectable({
  providedIn: 'root'
})
export class PreferitsService {
  private readonly STORAGE_KEY = 'preferits-cataleg';

  private _preferits = signal<PreferitElement[]>(this.carregarPreferits());

  readonly preferits: Signal<PreferitElement[]> = this._preferits.asReadonly();
  readonly totalPreferits = computed(() => this._preferits().length);

  private carregarPreferits(): PreferitElement[] {
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

    const nouPreferit: PreferitElement = {
      ...element,
      notes: []
    };

    this._preferits.set([...actuals, nouPreferit]);
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

  actualitzarNotes(id: string, notes: string[]): void {
    const actualitzats = this._preferits().map(pref =>
      pref.id === id ? { ...pref, notes } : pref
    );

    this._preferits.set(actualitzats);
    this.guardarPreferits();
  }
}