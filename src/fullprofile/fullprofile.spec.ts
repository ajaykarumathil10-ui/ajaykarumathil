import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fullprofile } from './fullprofile';

describe('Fullprofile', () => {
  let component: Fullprofile;
  let fixture: ComponentFixture<Fullprofile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fullprofile],
    }).compileComponents();

    fixture = TestBed.createComponent(Fullprofile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
