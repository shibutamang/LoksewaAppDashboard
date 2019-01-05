import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Observable } from 'rxjs';
import { Category } from '../model/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Category>;
  items: Observable<Category[]>;

  constructor(private af: AngularFireAuth, private db: AngularFirestore, private router: Router) {
   }

  ngOnInit() {
    this.itemsCollection = this.db.collection('category');
    this.items = this.itemsCollection.valueChanges();
    console.log(this.items);
  }

  getContent() {

  }
}
