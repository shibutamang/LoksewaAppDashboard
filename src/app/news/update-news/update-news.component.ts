import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from '../../model/news';
import { NewsService } from '../../services/news.service';
import { UpdateNews } from '../../model/updateNews';
import { Observable } from 'rxjs';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.scss']
})
export class UpdateNewsComponent implements OnInit {
  id: string;
  public data: UpdateNews;

  constructor(private route: ActivatedRoute, private news: NewsService) {
    this.route.params.subscribe( params => {this.id = params['id']; });
  }

  ngOnInit() {
    this.news.getNews(this.id).subscribe(a => this.data = a);
  }
  onSubmit(f) {
    this.news.updateNews(f.value, this.id);
  }
}
