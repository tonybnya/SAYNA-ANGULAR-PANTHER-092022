import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWakandaComponent } from './main-wakanda.component';

describe('MainWakandaComponent', () => {
  let component: MainWakandaComponent;
  let fixture: ComponentFixture<MainWakandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainWakandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainWakandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
