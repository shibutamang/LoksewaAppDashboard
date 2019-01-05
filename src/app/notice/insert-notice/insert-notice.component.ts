import { Component, OnInit } from '@angular/core';
import { Notice } from '../../model/notice';
import { NoticeService } from '../../services/notice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-notice',
  templateUrl: './insert-notice.component.html',
  styleUrls: ['./insert-notice.component.scss']
})
export class InsertNoticeComponent implements OnInit {

  constructor(private notice: NoticeService, private router: Router,  private toastr: ToastrService) { }
  data: Notice = {
    title: '',
    body: '',
    file_url: '',
    pub_date: ''
  };

  ngOnInit() {
  }

  onSubmit() {
    if (this.data.title === '' || this.data.body === '' || this.data.file_url === '' || this.data.pub_date === '') {
      alert('All the fields are required!');
    } else {
      this.notice.addNotice(this.data);
      this.toastr.success('added successfuly');
      this.data.title = '';
      this.data.body = '';
      this.data.pub_date = '';
      this.data.file_url = '';
      this.router.navigate(['notice']);
    }
  }

}
