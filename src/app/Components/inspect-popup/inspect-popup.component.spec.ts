import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectPopupComponent } from './inspect-popup.component';

describe('InspectPopupComponent', () => {
  let component: InspectPopupComponent;
  let fixture: ComponentFixture<InspectPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
