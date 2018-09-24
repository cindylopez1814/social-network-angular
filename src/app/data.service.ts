import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { post } from 'selenium-webdriver/http';

export interface Post {
  message: string;
}

export interface Chat {
  msm: string;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private postCollection: AngularFirestoreCollection<Post>;
  post$: Observable<Post[]>;
  private postDoc: AngularFirestoreDocument<Post>;

  private chatCollection: AngularFirestoreCollection<Chat>;
  chat$: Observable<Chat[]>;
  private chatDoc: AngularFirestoreDocument<Chat>;

  constructor(private afs: AngularFirestore) {
    this.postCollection = afs.collection<Post>('post');
    this.post$ = this.postCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

    this.chatCollection = afs.collection<Chat>('chat');
    this.chat$ = this.chatCollection.snapshotChanges().pipe(
      map(index => index.map(i => {
        const dataChat = i.payload.doc.data() as Chat;
        const id = i.payload.doc.id;
        return {id, ...dataChat};
      }))
    );
  }

  getPost() {
    return this.post$;
  }

  addPost(item: Post) {
    this.postCollection.add(item);
  }

  deletePost(item) {
    this.postDoc = this.afs.doc<Post>(`post/${item.id}`);
    this.postDoc.delete();
  }

  editPost(item) {
    this.postDoc = this.afs.doc<Post>(`post/${item.id}`);
    this.postDoc.update(item);
  }

  getChat() {
    return this.chat$;
  }

  addChat(item: Chat) {
    this.chatCollection.add(item);
  }
}




