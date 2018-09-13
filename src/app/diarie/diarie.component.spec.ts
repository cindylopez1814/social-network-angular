import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarieComponent } from './diarie.component';

describe('DiarieComponent', () => {
  let component: DiarieComponent;
  let fixture: ComponentFixture<DiarieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiarieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
