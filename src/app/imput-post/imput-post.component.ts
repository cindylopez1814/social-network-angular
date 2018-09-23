import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Component({
  selector: 'app-imput-post',
  templateUrl: './imput-post.component.html',
  styleUrls: ['./imput-post.component.css']
})
export class ImputPostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
