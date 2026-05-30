import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomMenubar } from './bottom-menubar';

describe('BottomMenubar', () => {
  let component: BottomMenubar;
  let fixture: ComponentFixture<BottomMenubar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomMenubar],
    }).compileComponents();

    fixture = TestBed.createComponent(BottomMenubar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
