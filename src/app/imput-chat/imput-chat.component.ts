import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { DataService } from '../data.service';

@Component({
  selector: 'app-imput-chat',
  templateUrl: './imput-chat.component.html',
  styleUrls: ['./imput-chat.component.css']
})
export class ImputChatComponent implements OnInit {
  chat: any = {
    msn: ''
  };

  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private dataBase: AngularFireDatabase, private dataService: DataService) { }

  ngOnInit() {
  }

  send() {
    this.dataService.addChat(this.chat);
    this.chat.msn = '';
  }
}
