import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertNoticeComponent } from './insert-notice.component';

describe('InsertNoticeComponent', () => {
  let component: InsertNoticeComponent;
  let fixture: ComponentFixture<InsertNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
