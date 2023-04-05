import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeracceptanceComponent } from './customeracceptance.component';

describe('CustomeracceptanceComponent', () => {
  let component: CustomeracceptanceComponent;
  let fixture: ComponentFixture<CustomeracceptanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomeracceptanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomeracceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
