import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLangSwitchComponent } from './header-lang-switch.component';

describe('HeaderLangSwitchComponent', () => {
  let component: HeaderLangSwitchComponent;
  let fixture: ComponentFixture<HeaderLangSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLangSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLangSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
