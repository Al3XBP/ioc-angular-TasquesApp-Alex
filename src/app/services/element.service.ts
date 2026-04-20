import { Injectable, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ElementApiResponse, ElementCataleg } from '../models/element.model';
import { adaptarElementsApi } from '../adaptadors/element.adaptador';

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  private readonly apiUrl = `${environment.apiUrl}/elements`;

  private _elements = signal<ElementCataleg[]>([]);
  private _carregant = signal<boolean>(false);
  private _error = signal<string | null>(null);

  readonly elements: Signal<ElementCataleg[]> = this._elements.asReadonly();
  readonly carregant: Signal<boolean> = this._carregant.asReadonly();
  readonly error: Signal<string | null> = this._error.asReadonly();

  constructor(private http: HttpClient) {}

  obtenirPopulars(): void {
    this._carregant.set(true);
    this._error.set(null);

    this.http.get<ElementApiResponse[]>(`${this.apiUrl}?popular=true`).subscribe({
      next: (data) => {
        this._elements.set(adaptarElementsApi(data));
        this._carregant.set(false);
      },
      error: () => {
        this._error.set('No s’han pogut carregar els elements populars.');
        this._carregant.set(false);
      }
    });
  }

  cercar(terme: string): void {
    this._carregant.set(true);
    this._error.set(null);

    this.http.get<ElementApiResponse[]>(`${this.apiUrl}?nom_like=${terme}`).subscribe({
      next: (data) => {
        this._elements.set(adaptarElementsApi(data));
        this._carregant.set(false);
      },
      error: () => {
        this._error.set('S’ha produït un error en fer la cerca.');
        this._carregant.set(false);
      }
    });
  }
}