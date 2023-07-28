import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarProgramacionComponent } from './generar-programacion.component';

describe('GenerarProgramacionComponent', () => {
  let component: GenerarProgramacionComponent;
  let fixture: ComponentFixture<GenerarProgramacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarProgramacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerarProgramacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
