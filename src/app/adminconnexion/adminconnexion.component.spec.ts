import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminconnexionComponent } from './adminconnexion.component';

describe('AdminconnexionComponent', () => {
  let component: AdminconnexionComponent;
  let fixture: ComponentFixture<AdminconnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminconnexionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminconnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
