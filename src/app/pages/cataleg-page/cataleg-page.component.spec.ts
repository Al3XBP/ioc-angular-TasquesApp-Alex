import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalegPageComponent } from './cataleg-page.component';

describe('CatalegPageComponent', () => {
  let component: CatalegPageComponent;
  let fixture: ComponentFixture<CatalegPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalegPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalegPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
