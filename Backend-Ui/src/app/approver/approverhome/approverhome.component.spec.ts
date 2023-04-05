import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverhomeComponent } from './approverhome.component';

describe('ApproverhomeComponent', () => {
  let component: ApproverhomeComponent;
  let fixture: ComponentFixture<ApproverhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproverhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproverhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
