import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../../model/vacancy';
import { VacancyService } from '../../services/vacancy.service';

@Component({
  selector: 'app-insert-vacancy',
  templateUrl: './insert-vacancy.component.html',
  styleUrls: ['./insert-vacancy.component.scss']
})
export class InsertVacancyComponent implements OnInit {

  data: Vacancy = {
    title: '',
    pub_date: '',
    file_url: ''
  };
  constructor(private service: VacancyService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.data.title === '' || this.data.pub_date === '' || this.data.file_url === '') {
      alert('all the fields are required!');
      return;
    } else {
    this.service.addVacancy(this.data);
  }
  }

}
