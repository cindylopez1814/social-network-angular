import { Component, Input } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'social-network-angular';
  @Input() msj: string;   // decorador

  constructor(private router: Router, private authService: AuthService) {
  }
}
