import { Component, OnInit } from '@angular/core';
import { Notice } from '../../model/notice';
import { NoticeService } from '../../services/notice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-notice',
  templateUrl: './update-notice.component.html',
  styleUrls: ['./update-notice.component.scss']
})
export class UpdateNoticeComponent implements OnInit {

  id: string;

  constructor(private service: NoticeService, private router: ActivatedRoute, private r: Router) {
    this.router.params.subscribe( params => this.id = params['id']);
   }

  data: Notice = {
    title: '',
    body: '',
    pub_date: '',
    file_url: ''
  };

  ngOnInit() {
    this.service.getNotice(this.id).subscribe( a => this.data = a);
  }

  onSubmit() {
    this.service.updateNotice(this.data, this.id);
    this.r.navigate(['notice']);
  }

}
