import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireAction, AngularFireList } from '@angular/fire/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chat: any;

  constructor(private formBuilder: FormBuilder, private database: AngularFireDatabase, private dataservice: DataService) {
    this.dataservice.getChat().subscribe(item => {
      this.chat = item;
      console.log(item);
    });
  }

  ngOnInit() {
  }

}
