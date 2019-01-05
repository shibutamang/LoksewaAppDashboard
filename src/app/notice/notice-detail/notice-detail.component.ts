import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../../services/notice.service';
import { Observable } from 'rxjs';
import { Notice } from '../../model/notice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notice-detail',
  templateUrl: './notice-detail.component.html',
  styleUrls: ['./notice-detail.component.scss']
})
export class NoticeDetailComponent implements OnInit {
  id: string;

  constructor(private service: NoticeService, private rparmas: ActivatedRoute) {
    this.rparmas.params.subscribe(params => { this.id = params['id']; });
   }
  item: Notice;

  ngOnInit() {
    this.service.getNotice(this.id).subscribe(a => this.item = a );
  }

}
