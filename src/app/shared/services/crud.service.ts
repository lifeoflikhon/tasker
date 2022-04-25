import { Injectable, Optional } from '@angular/core';
import { AngularFirestore, QueryFn } from '@angular/fire/compat/firestore';
import { take, tap } from 'rxjs/operators';
import { from, map, Observable, of, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private afs: AngularFirestore) {}

  getRandomId(): string {
    return this.afs.createId();
  }

  getCollections<T>(path: string, query?: QueryFn) {
    return this.afs.collection<T>(path, query).valueChanges({ idField: 'id' });
  }

  getDocument<T>(path: string): Observable<T | undefined> {
    return this.afs.doc<T>(path).valueChanges({ idField: 'id' });
  }

  setDocument(path: string, data: any) {
    return this.afs.doc(path).set( data);
  }

  addDocument(path: string, data: any): Observable<any> {
    const colRef = this.afs.collection(path);
    return from(colRef.add(data)).pipe(
      switchMap((docRef) => colRef.doc<any>(docRef.id).valueChanges()),
      take(1),
    );
  }

  updateDocument(path: string, data: any) {
    this.afs.doc(path).update(data).then(() => {});
    return this.getDocument(path);
  }

  deleteDocument(path: string): Observable<any> {
    this.afs.doc(path).delete().then(() => {});
    return this.getDocument<any>(path).pipe(
      map(res => res.id)
    );
  }
}
