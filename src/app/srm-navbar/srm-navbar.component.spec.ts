import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrmNavbarComponent } from './srm-navbar.component';

describe('SrmNavbarComponent', () => {
  let component: SrmNavbarComponent;
  let fixture: ComponentFixture<SrmNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrmNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrmNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
