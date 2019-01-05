import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Vacancy } from '../model/vacancy';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  itemCollection: AngularFirestoreCollection<Vacancy>;
  itemDoc: AngularFirestoreDocument<Vacancy>;
  item: Observable<Vacancy>;
  items: Observable<Vacancy[]>;

  constructor(private afs: AngularFirestore, private router: Router, private toastr: ToastrService) {
    this.itemCollection = this.afs.collection<Vacancy>('vacancy');
    this.items = this.itemCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Vacancy;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  getAllVacancy() {
    return this.items;
  }

  getVacancy(id) {
    this.itemDoc = this.afs.doc(`vacancy/${id}`);
    this.item = this.itemDoc.valueChanges();
    return this.item;
  }

  addVacancy(data) {
    this.itemCollection.add(data);
    this.toastr.success('added successfully');
    this.router.navigate(['vacancy']);
  }

  deleteVacancy(item) {
    this.itemDoc = this.afs.doc(`vacancy/${item.id}`);
    this.itemDoc.delete();
    this.toastr.success('deleted successfully');
  }

  updateVacancy(data) {
    this.itemDoc.update(data);
    this.toastr.success('updated successfully');
    this.router.navigate(['vacancy']);
  }
}
