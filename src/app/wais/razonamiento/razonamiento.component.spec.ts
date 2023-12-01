import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazonamientoComponent } from './razonamiento.component';

describe('RazonamientoComponent', () => {
  let component: RazonamientoComponent;
  let fixture: ComponentFixture<RazonamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RazonamientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RazonamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
