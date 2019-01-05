import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { GkService } from '../services/gk.service';
import { GkContentService } from '../services/gk-content.service';
import { Contents } from '../model/content';

@Component({
  selector: 'app-gk-content',
  templateUrl: './gk-content.component.html',
  styleUrls: ['./gk-content.component.css']
})
export class GkContentComponent implements OnInit {

  constructor(private gk: GkService, private service: GkContentService) { }

  data: Contents = {
    category: '',
    content_name: '',
    answer: ''
  };

  categories: Category[];
  items: Contents[];
  oitems: Observable<Contents>;
  // tslint:disable-next-line:no-inferrable-types
  isUpdate: boolean = false;

  ngOnInit() {
    this.getAllCategory();
    this.getContents();
  }

  getAllCategory() {
    this.gk.getAllCategory().subscribe(a => this.categories = a);
  }

  getContents() {
    this.service.getContents().subscribe(a => this.items = a);
  }
  onSubmit() {
    if (this.data.category === '' || this.data.content_name === '' || this.data.answer === '' ) {
      alert('all the fields are required!');
      return;
    } else {
    this.service.addContent(this.data);
    this.data.category = '';
    this.data.content_name = '';
    this.data.answer = '';
    this.getAllCategory();
    this.getContents();
  }
  }

  edit(id) {
    this.isUpdate = true;
    this.oitems = this.service.getContent(id);
    this.oitems.subscribe(a => this.data = a);
  }
  update() {
    console.log(this.data.category);
    this.data.category = '';
    this.data.content_name = '';
    this.data.answer = '';
    this.isUpdate = false;
  }
  cancel() {
    this.isUpdate = false;
    this.data.category = '';
    this.data.content_name = '';
    this.data.answer = '';
  }
  delete(item) {
    const c = confirm('are you sure to delete?');
    if (c === true) {
      this.service.deleteContent(item);
    } else {
      return;
    }
  }

}
