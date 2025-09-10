import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRegistration } from './app-registration';

describe('AppRegistration', () => {
  let component: AppRegistration;
  let fixture: ComponentFixture<AppRegistration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRegistration]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AppRegistration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
