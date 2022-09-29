import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CucuiComponent } from './cucui.component';

describe('CucuiComponent', () => {
  let component: CucuiComponent;
  let fixture: ComponentFixture<CucuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CucuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CucuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
