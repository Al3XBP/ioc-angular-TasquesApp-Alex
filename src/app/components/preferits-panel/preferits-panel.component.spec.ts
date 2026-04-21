import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferitsPanelComponent } from './preferits-panel.component';

describe('PreferitsPanelComponent', () => {
  let component: PreferitsPanelComponent;
  let fixture: ComponentFixture<PreferitsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreferitsPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreferitsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
