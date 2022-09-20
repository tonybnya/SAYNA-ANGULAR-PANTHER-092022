import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroEnigmeComponent } from './hero-enigme.component';

describe('HeroEnigmeComponent', () => {
  let component: HeroEnigmeComponent;
  let fixture: ComponentFixture<HeroEnigmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroEnigmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroEnigmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
