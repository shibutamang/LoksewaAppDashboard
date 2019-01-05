import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Notice } from '../model/notice';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  itemCollection: AngularFirestoreCollection<Notice>;
  items: Observable<Notice[]>;
  item: Observable<Notice>;
  itemDoc: AngularFirestoreDocument<Notice>;

  constructor(private af: AngularFirestore, private toastr: ToastrService, private router: Router) {
    this.itemCollection = this.af.collection<Notice>('notice');
    this.items = this.itemCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Notice;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  getAllNotice() {
    return this.items;
  }
  getNotice(id) {
    this.itemDoc = this.af.doc(`notice/${id}`);
    this.item = this.itemDoc.valueChanges();
    return this.item;
  }
  addNotice(data: Notice) {
    this.itemCollection.add(data);
  }
  deleteNotice(item: Notice) {
    this.itemDoc = this.af.doc(`notice/${item.id}`);
    this.itemDoc.delete();
    this.toastr.success('successfully deleted');
  }

  updateNotice(item, id) {
    this.itemDoc = this.af.doc(`notice/${id}`);
    this.itemDoc.update(item).catch(e => console.log(e));
    this.toastr.success('successfully deleted');
  }
}
