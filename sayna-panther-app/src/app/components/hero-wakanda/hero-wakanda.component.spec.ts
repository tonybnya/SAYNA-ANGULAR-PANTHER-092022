import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroWakandaComponent } from './hero-wakanda.component';

describe('HeroWakandaComponent', () => {
  let component: HeroWakandaComponent;
  let fixture: ComponentFixture<HeroWakandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroWakandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroWakandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
