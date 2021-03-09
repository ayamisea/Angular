import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UitestComponent } from './uitest.component';

describe('UitestComponent', () => {
  let component: UitestComponent;
  let fixture: ComponentFixture<UitestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UitestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UitestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
