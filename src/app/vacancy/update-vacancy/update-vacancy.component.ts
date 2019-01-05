import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vacancy } from '../../model/vacancy';
import { VacancyService } from '../../services/vacancy.service';

@Component({
  selector: 'app-update-vacancy',
  templateUrl: './update-vacancy.component.html',
  styleUrls: ['./update-vacancy.component.scss']
})
export class UpdateVacancyComponent implements OnInit {

  id: string;
  data: Vacancy = {
    title: '',
    pub_date: '',
    file_url: ''
  };

  constructor(private rparams: ActivatedRoute, private service: VacancyService) {
    this.rparams.params.subscribe( params => this.id = params['id']);
   }

  ngOnInit() {
    this.service.getVacancy(this.id).subscribe(a => this.data = a);
  }
  onSubmit() {
    this.service.updateVacancy(this.data);
  }

}
