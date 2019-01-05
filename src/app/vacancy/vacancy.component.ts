import { Component, OnInit } from '@angular/core';
import { VacancyService } from '../services/vacancy.service';
import { Observable } from 'rxjs';
import { Vacancy } from '../model/vacancy';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {

  constructor(private service: VacancyService) { }
  items: Observable<Vacancy[]>;

  ngOnInit() {
    this.items = this.service.getAllVacancy();
  }

  delete(item: Vacancy) {
    const a = confirm('are you sure to delete?');
    if (a === true) {
      this.service.deleteVacancy(item);
    } else {
      return;
    }
  }

}
