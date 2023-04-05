import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovernavComponent } from './approvernav.component';

describe('ApprovernavComponent', () => {
  let component: ApprovernavComponent;
  let fixture: ComponentFixture<ApprovernavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovernavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovernavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
