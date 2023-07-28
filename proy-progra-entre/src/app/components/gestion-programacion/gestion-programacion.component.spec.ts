import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProgramacionComponent } from './gestion-programacion.component';

describe('GestionProgramacionComponent', () => {
  let component: GestionProgramacionComponent;
  let fixture: ComponentFixture<GestionProgramacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionProgramacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionProgramacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
