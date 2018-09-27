import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  options: FormGroup;
  opened = true;
  over = 'side';
  expandHeight = '100vh';
  collapseHeight = '10vh';
  displayMode = 'flat';
  watcher: Subscription;

  // tslint:disable-next-line:max-line-length
  constructor(private authService: AuthService, private snackBar: MatSnackBar, private router: Router, private fb: FormBuilder, private media: ObservableMedia) {
    this.options = fb.group({
      bottom: 0,
      fixed: true,
      top: 0
    });
    this.watcher = media.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.opened = false;
        this.over = 'over';
      } else {
        this.opened = true;
        this.over = 'side';
      }
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
