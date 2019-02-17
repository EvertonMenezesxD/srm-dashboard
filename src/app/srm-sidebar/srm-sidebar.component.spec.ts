import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrmSidebarComponent } from './srm-sidebar.component';

describe('SrmSidebarComponent', () => {
  let component: SrmSidebarComponent;
  let fixture: ComponentFixture<SrmSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrmSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrmSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
