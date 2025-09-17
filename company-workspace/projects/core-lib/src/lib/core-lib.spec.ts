import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreLib } from './core-lib';

describe('CoreLib', () => {
  let component: CoreLib;
  let fixture: ComponentFixture<CoreLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreLib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
