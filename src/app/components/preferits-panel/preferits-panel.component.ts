import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PreferitsService } from '../../services/preferits.service';
import { PreferitElement } from '../../models/element.model';

@Component({
  selector: 'app-preferits-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './preferits-panel.component.html',
  styleUrl: './preferits-panel.component.scss'
})
export class PreferitsPanelComponent {
  private fb = inject(FormBuilder);

  formularisNotes: Record<string, FormGroup> = {};

  constructor(public preferitsService: PreferitsService) {
    effect(() => {
      const preferitsActuals = this.preferitsService.preferits();
      this.sincronitzarFormularis(preferitsActuals);
    });
  }

  get preferits(): PreferitElement[] {
    return this.preferitsService.preferits();
  }

  private crearFormulariPreferit(preferit: PreferitElement): FormGroup {
    return this.fb.group({
      notes: this.fb.array(
        preferit.notes.map(nota =>
          this.fb.control(nota, {
            nonNullable: true,
            validators: [Validators.required, Validators.minLength(3)]
          })
        )
      )
    });
  }

  private sincronitzarFormularis(preferits: PreferitElement[]): void {
    const idsActuals = preferits.map(p => p.id);

    // Afegir formularis nous si no existeixen
    for (const preferit of preferits) {
      if (!this.formularisNotes[preferit.id]) {
        this.formularisNotes[preferit.id] = this.crearFormulariPreferit(preferit);
      }
    }

    // Eliminar formularis d'elements que ja no existeixen
    for (const id of Object.keys(this.formularisNotes)) {
      if (!idsActuals.includes(id)) {
        delete this.formularisNotes[id];
      }
    }
  }

  obtenirFormulari(id: string): FormGroup {
    return this.formularisNotes[id];
  }

  obtenirNotesArray(id: string): FormArray {
    return this.obtenirFormulari(id).get('notes') as FormArray;
  }

  afegirNota(id: string): void {
    this.obtenirNotesArray(id).push(
      new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3)]
      })
    );
  }

  eliminarNota(id: string, index: number): void {
    this.obtenirNotesArray(id).removeAt(index);
    this.guardarNotes(id);
  }

  guardarNotes(id: string): void {
  const notes = this.obtenirNotesArray(id).controls
    .map(control => (control.value || '').trim())
    .filter(nota => nota.length >= 3);

  this.preferitsService.actualitzarNotes(id, notes);
}

  trackByPreferitId(index: number, preferit: PreferitElement): string {
    return preferit.id;
  }
}