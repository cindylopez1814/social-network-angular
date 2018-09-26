import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  options: FormGroup;
  

  constructor(private authService: AuthService, private snackBar: MatSnackBar, private router: Router, private fb: FormBuilder) {
    this.options = fb.group({
      bottom: 0,
      fixed: true,
      top: 0
    });
  }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logOut()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(() => {
        this.snackBar.open('Error al tratar de cerrar sesión, trata otra vez'
          , null
          , {
            duration: 3000
          });
      });
  }
}
