import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { News } from '../model/news';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { UpdateNews } from '../model/updateNews';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  itemCollection: AngularFirestoreCollection<News>;
  items: Observable<News[]>;
  item: Observable<any>;
  itemDoc: AngularFirestoreDocument<News>;
  updateDoc: AngularFirestoreDocument<UpdateNews>;
  updateItem: Observable<UpdateNews>;

  constructor(private af: AngularFirestore, private toastr: ToastrService, private router: Router) {
    this.itemCollection = this.af.collection<News>('news');
    this.items = this.itemCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as News;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
   }

  // getting all the news list from collection
  getAllNews() {
    return this.items;
  }

  // getting single document i.e news item with id
  getNews(params) {
    this.updateDoc = this.af.doc<UpdateNews>(`news/${params}`);
    this.updateItem = this.updateDoc.valueChanges();
    return this.updateItem;
  }

  addNews(data) {
    this.itemCollection.add(data);
  }
  deleteNews(item: News) {
    console.log('id' + item.id);
    this.itemDoc = this.af.doc(`news/${item.id}`);
    this.itemDoc.delete();
    this.toastr.success('successfully deleted');
  }

  updateNews(uitem, id) {
    this.updateDoc = this.af.doc<UpdateNews>(`news/${id}`);
    this.updateDoc.update(uitem).catch( e => { console.log(e); return; });
    this.toastr.success('updated successfully');
    this.router.navigate(['news']);
  }
}
