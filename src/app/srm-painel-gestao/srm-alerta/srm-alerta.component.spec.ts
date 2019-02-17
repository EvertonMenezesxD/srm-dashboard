import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrmAlertaComponent } from './srm-alerta.component';

describe('SrmAlertaComponent', () => {
  let component: SrmAlertaComponent;
  let fixture: ComponentFixture<SrmAlertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrmAlertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrmAlertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
