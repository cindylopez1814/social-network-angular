import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { DataService } from '../data.service';

@Component({
  selector: 'app-imput-post',
  templateUrl: './imput-post.component.html',
  styleUrls: ['./imput-post.component.css']
})
export class ImputPostComponent implements OnInit {
  post: any = {
    name: ''
  };

  // tslint:disable-next-line:max-line-length
  constructor( private formBuilder: FormBuilder, private authService: AuthService, private dataBase: AngularFireDatabase, private dataService: DataService) { }

  ngOnInit() {
  }

  agregar() {
    this.dataService.addPost(this.post);
    this.post.name = '';
  }
}
