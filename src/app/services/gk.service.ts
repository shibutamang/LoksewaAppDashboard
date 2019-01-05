import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Category } from '../model/category';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GkService {
  itemCollection: AngularFirestoreCollection<Category>;
  itemDoc: AngularFirestoreDocument<Category>;
  items: Observable<Category[]>;

  constructor(private af: AngularFirestore, private toastr: ToastrService) {
    this.itemCollection = this.af.collection<Category>('category');
    this.items = this.itemCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Category;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  addCategory(data) {
    this.itemCollection.add(data);
    this.toastr.success('added successfully');
  }
  getAllCategory() {
    return this.items;
  }

  deleteCategory(item: Category) {
    this.itemDoc = this.af.doc(`category/${item.id}`);
    this.itemDoc.delete();
    this.toastr.success('successfully deleted');
  }

  updateCategory(data, id) {
    this.itemDoc = this.af.doc(`category/${id}`);
    this.itemDoc.update(data);
    this.toastr.success('updated successfully');
  }
}
