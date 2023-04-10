import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpinfoComponent } from './helpinfo.component';

describe('HelpinfoComponent', () => {
  let component: HelpinfoComponent;
  let fixture: ComponentFixture<HelpinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
