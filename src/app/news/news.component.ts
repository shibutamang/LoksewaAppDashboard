import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';
import { News } from '../model/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public p: number;

  constructor(private news: NewsService) { }

  items: Observable<News[]>;
  // tslint:disable-next-line:no-inferrable-types
  isLoading: boolean = true;

  ngOnInit() {
    this.getNews();
    this.items.subscribe(() => this.isLoading = false);
    this.p = 1;
  }
  getNews() {
    this.items = this.news.getAllNews();
  }
  deleteNews(event, item) {
    const c = confirm('Are you sure to delete?');
    if (c === true) {
      this.news.deleteNews(item);
    } else {
      return;
    }
  }

}
