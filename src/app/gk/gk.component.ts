import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { GkService } from '../services/gk.service';
import { GkContentService } from '../services/gk-content.service';
import { Contents } from '../model/content';

@Component({
  selector: 'app-gk',
  templateUrl: './gk.component.html',
  styleUrls: ['./gk.component.css']
})
export class GkComponent implements OnInit {

  constructor(private service: GkService, private content: GkContentService) { }
  items: Observable<Category[]>;
  data: Category = {
    category: ''
  };
  contents: Contents[];
  // tslint:disable-next-line:no-inferrable-types
  isUpdate: boolean = false;
  isLoading: boolean = true;

  ngOnInit() {
    this.items = this.service.getAllCategory();
    this.items.subscribe(() => this.isLoading = false);
  }

  add() {
    if (this.data.category === '') {
      alert('input field is empty');
      return;
    } else {
    this.service.addCategory(this.data);
    this.data.category = '';
  }
  }

  deleteCat(item) {
    const c = confirm('Are you sure to delete?');
    if ( c === true) {
      this.service.deleteCategory(item);
    } else {
        return ;
    }
  }

  edit(item) {
    this.isUpdate = true;
    this.data = item;
  }
  update() {
    if (this.data.category === '') {
      alert('input field is empty');
      return;
    } else {
    this.service.updateCategory(this.data, this.data.id);
    this.data.category = '';
    this.isUpdate = false;
    }
  }
  cancel() {
    this.isUpdate = false;
    this.data.category = '';
  }

  query(cat) {
    this.content.getByName(cat).subscribe(a => this.contents = a);
    console.log(this.contents);
  }
}
