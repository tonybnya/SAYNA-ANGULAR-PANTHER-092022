import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroEshopComponent } from './hero-eshop.component';

describe('HeroEshopComponent', () => {
  let component: HeroEshopComponent;
  let fixture: ComponentFixture<HeroEshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroEshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroEshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
