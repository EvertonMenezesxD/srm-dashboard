import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrmContaDigitalComponent } from './srm-conta-digital.component';

describe('SrmContaDigitalComponent', () => {
  let component: SrmContaDigitalComponent;
  let fixture: ComponentFixture<SrmContaDigitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrmContaDigitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrmContaDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
