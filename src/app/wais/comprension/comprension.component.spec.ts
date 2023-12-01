import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprensionComponent } from './comprension.component';

describe('ComprensionComponent', () => {
  let component: ComprensionComponent;
  let fixture: ComponentFixture<ComprensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprensionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
