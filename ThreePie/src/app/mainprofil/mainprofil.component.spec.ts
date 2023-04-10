import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainprofilComponent } from './mainprofil.component';

describe('MainprofilComponent', () => {
  let component: MainprofilComponent;
  let fixture: ComponentFixture<MainprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainprofilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
