import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireAction, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-diarie',
  templateUrl: './diarie.component.html',
  styleUrls: ['./diarie.component.css']
})
export class DiarieComponent implements OnInit {
  post: any;
  editPost: any = {
    message: ''
  };

  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private database: AngularFireDatabase, private dataservice: DataService) {
    this.dataservice.getPost().subscribe(item => {
      this.post = item;
      console.log(item);
    });
  }

  ngOnInit() {
  }

  remove(item) {
    this.dataservice.deletePost(item);
  }

  edit(item) {
  this.editPost = item;
  }

  agregarPostEditado() {
    this.dataservice.editPost(this.editPost);
  }
}
