import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chatForm: FormGroup;
  chatList$: AngularFireList<any>; //esto es del tipo observable de firebase, son asincronos con valor variable

  ngOnInit() {
  }

  constructor(private formBuilder: FormBuilder, private database: AngularFireDatabase) {
    // aquí se engancha la base de datos
    this.createChatForm();
    //hacemos una consulta a la base de datos
    this.chatList$ = this.database.list('/chat');
    // signo $ es una convención para los observables

    {
      const newChat = { //tipo inferido
        title: this.chatForm.value.message,
      };
      this.chatList$.push(newChat);//esto agrega un nuevo meme
      this.chatForm.reset();

    }
  }
  createChatForm(){
    this.chatForm = this.formBuilder.group({
      msj: ['', Validators.required],
    })
  };
}
