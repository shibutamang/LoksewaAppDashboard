import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { News } from '../../model/news';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-insert-news',
  templateUrl: './insert-news.component.html',
  styleUrls: ['./insert-news.component.scss']
})
export class InsertNewsComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService, private news: NewsService) { }
  data: News = {
    heading: '',
    content: '',
    pub_date: '',
    img_url: '',
  };

  ngOnInit() {
  }

  onSubmit() {
    if (this.data.heading === '' || this.data.content === '' || this.data.img_url === '' || this.data.pub_date === '') {
      alert('All the fields are required!');
    } else {
      this.news.addNews(this.data);
      this.toastr.success('added successfuly');
      this.data.heading = '';
      this.data.content = '';
      this.data.pub_date = '';
      this.data.img_url = '';
      this.router.navigate(['news']);
    }
  }
}
