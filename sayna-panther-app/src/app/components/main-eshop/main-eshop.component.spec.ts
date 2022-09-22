import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEshopComponent } from './main-eshop.component';

describe('MainEshopComponent', () => {
  let component: MainEshopComponent;
  let fixture: ComponentFixture<MainEshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainEshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainEshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
