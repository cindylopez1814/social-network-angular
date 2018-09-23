import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImputChatComponent } from './imput-chat.component';

describe('ImputChatComponent', () => {
  let component: ImputChatComponent;
  let fixture: ComponentFixture<ImputChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImputChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImputChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
