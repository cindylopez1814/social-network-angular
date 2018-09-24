import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImputPostComponent } from './imput-post.component';

describe('ImputPostComponent', () => {
  let component: ImputPostComponent;
  let fixture: ComponentFixture<ImputPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImputPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImputPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
