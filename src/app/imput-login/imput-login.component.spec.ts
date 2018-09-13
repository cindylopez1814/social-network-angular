import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImputLoginComponent } from './imput-login.component';

describe('ImputLoginComponent', () => {
  let component: ImputLoginComponent;
  let fixture: ComponentFixture<ImputLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImputLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImputLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
