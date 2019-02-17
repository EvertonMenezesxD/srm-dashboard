import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrmRecebiveisComponent } from './srm-recebiveis.component';

describe('SrmRecebiveisComponent', () => {
  let component: SrmRecebiveisComponent;
  let fixture: ComponentFixture<SrmRecebiveisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrmRecebiveisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrmRecebiveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
