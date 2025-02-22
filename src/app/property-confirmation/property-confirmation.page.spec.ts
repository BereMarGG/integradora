import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PropertyConfirmationPage } from './property-confirmation.page';

describe('PropertyConfirmationPage', () => {
  let component: PropertyConfirmationPage;
  let fixture: ComponentFixture<PropertyConfirmationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyConfirmationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
