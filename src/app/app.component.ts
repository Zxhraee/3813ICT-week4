import { Component, inject } from '@angular/core';
import { RouterOutlet, Router, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  //Upon log in, return AuthService isLoggedIn state
  get isLoggedIn() { return this.auth.isLoggedIn(); }

  //Upon log out, clear login info from local storage and reeturn to login page
  logout() {
    this.auth.logout();           
    this.router.navigate(['/login']);
  }
}
