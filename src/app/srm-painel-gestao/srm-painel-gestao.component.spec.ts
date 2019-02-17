import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrmPainelGestaoComponent } from './srm-painel-gestao.component';

describe('SrmPainelGestaoComponent', () => {
  let component: SrmPainelGestaoComponent;
  let fixture: ComponentFixture<SrmPainelGestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrmPainelGestaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrmPainelGestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
