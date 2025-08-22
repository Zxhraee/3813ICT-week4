import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';  
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  //Model to hold login information
  model = { email: '', password: '' };
  error = '';

  constructor(private router: Router, private auth: AuthService) {}


  async login() {
    this.error = '';
    try {
      //Send credentials to server and convert to JSON string
      const res = await fetch('http://localhost:3000/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.model), 
      });
      const data = await res.json();

      //If Login fail pass error message
      if (!data.valid) {
        this.error = 'Invalid email or password';
        return;
      }

      //If login success, save user data to storage
      this.auth.currentUser = data;

      //If server off, send unreachable
      this.router.navigate(['/profile']);
    } catch {
      this.error = 'Server unreachable';
    }
  }
}