import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutLoginSigninComponent } from './default-layout-login-signin.component';

describe('DefaultLayoutLoginSigninComponent', () => {
  let component: DefaultLayoutLoginSigninComponent;
  let fixture: ComponentFixture<DefaultLayoutLoginSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultLayoutLoginSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultLayoutLoginSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
