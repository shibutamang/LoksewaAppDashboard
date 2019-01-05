import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertVacancyComponent } from './insert-vacancy.component';

describe('InsertVacancyComponent', () => {
  let component: InsertVacancyComponent;
  let fixture: ComponentFixture<InsertVacancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertVacancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
