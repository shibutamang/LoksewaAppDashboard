import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../services/notice.service';
import { Notice } from '../model/notice';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  constructor(private notice: NoticeService) { }

  items: Observable<Notice[]>;
  isLoading: boolean = true;

  ngOnInit() {
    this.items = this.notice.getAllNotice();
    this.items.subscribe(() => this.isLoading = false);
  }

  deleteNotice(item) {
    const c = confirm('Are you sure to delete?');
    if (c === true) {
      this.notice.deleteNotice(item);
    } else {
      return;
    }
  }

}
