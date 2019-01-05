import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Contents } from '../model/content';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GkContentService {

  itemDoc: AngularFirestoreDocument<Contents>;
  itemCollection: AngularFirestoreCollection<Contents>;
  items: Observable<Contents[]>;
  item: Observable<Contents>;

  constructor(private afs: AngularFirestore, private toastr: ToastrService) {
    this.itemCollection = this.afs.collection<Contents>('content');
    this.items = this.itemCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Contents;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
   }

   getContents() {
     return this.items;
   }
   getContent(params) {
     this.itemDoc = this.afs.doc<Contents>(`content/${params}`);
     this.item = this.itemDoc.valueChanges();
     return this.item;
   }
   addContent(data) {
    this.itemCollection.add(data);
    this.toastr.success('added successfully');
   }
   deleteContent(item: Contents) {
    this.itemDoc = this.afs.doc(`content/${item.id}`);
    this.itemDoc.delete();
    this.toastr.success('deleted successfully');
   }
   getByName(cat) {
     this.itemCollection = this.afs.collection('content', ref => ref.where('category', '==', cat));
     this.items = this.itemCollection.valueChanges();
     return this.items;
   }
}
