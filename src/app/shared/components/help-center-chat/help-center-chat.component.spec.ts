import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCenterChatComponent } from './help-center-chat.component';

describe('HelpCenterChatComponent', () => {
  let component: HelpCenterChatComponent;
  let fixture: ComponentFixture<HelpCenterChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpCenterChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpCenterChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
