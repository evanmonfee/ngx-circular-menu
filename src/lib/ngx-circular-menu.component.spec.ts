import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCircularMenuComponent } from './ngx-circular-menu.component';

describe('NgxCircularMenuComponent', () => {
  let component: NgxCircularMenuComponent;
  let fixture: ComponentFixture<NgxCircularMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCircularMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCircularMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
