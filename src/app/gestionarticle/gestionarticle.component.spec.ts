import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarticleComponent } from './gestionarticle.component';

describe('GestionarticleComponent', () => {
  let component: GestionarticleComponent;
  let fixture: ComponentFixture<GestionarticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
