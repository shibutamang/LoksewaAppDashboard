import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { News } from '../../model/news';
import { NewsService } from '../../services/news.service';
import { UpdateNews } from '../../model/updateNews';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  id: string;
  itemDoc: AngularFirestoreDocument<UpdateNews>;
  items: Observable<UpdateNews>;

  constructor(private route: ActivatedRoute, private afs: AngularFirestore, private news: NewsService) {
    this.route.params.subscribe( params => {this.id = params['id']; });
   }

  ngOnInit() {
    this.items = this.news.getNews(this.id);
  }

}
