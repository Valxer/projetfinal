import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErreurcommandeComponent } from './erreurcommande.component';

describe('ErreurcommandeComponent', () => {
  let component: ErreurcommandeComponent;
  let fixture: ComponentFixture<ErreurcommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErreurcommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErreurcommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
