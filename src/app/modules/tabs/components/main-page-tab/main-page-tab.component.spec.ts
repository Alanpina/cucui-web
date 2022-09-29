import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageTabComponent } from './main-page-tab.component';

describe('MainPageTabComponent', () => {
  let component: MainPageTabComponent;
  let fixture: ComponentFixture<MainPageTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
