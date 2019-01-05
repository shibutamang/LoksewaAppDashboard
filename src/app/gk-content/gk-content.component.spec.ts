import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GkContentComponent } from './gk-content.component';

describe('GkContentComponent', () => {
  let component: GkContentComponent;
  let fixture: ComponentFixture<GkContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GkContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GkContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
