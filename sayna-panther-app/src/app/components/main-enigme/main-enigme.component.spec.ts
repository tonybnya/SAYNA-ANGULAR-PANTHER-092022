import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEnigmeComponent } from './main-enigme.component';

describe('MainEnigmeComponent', () => {
  let component: MainEnigmeComponent;
  let fixture: ComponentFixture<MainEnigmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainEnigmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainEnigmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
