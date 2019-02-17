import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrmAtalhoComponent } from './srm-atalho.component';

describe('SrmAtalhoComponent', () => {
  let component: SrmAtalhoComponent;
  let fixture: ComponentFixture<SrmAtalhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrmAtalhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrmAtalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
