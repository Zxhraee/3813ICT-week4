import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';  
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  model = {
    email: '',
    password: ''
  };

  error = '';

  constructor(private router: Router) {}

  private users = [
    { email: 'anamzahrakhan@gmail.com', password: 'pass123' },
    { email: 'zahraanamkhan@gmail.com',     password: 'pass123' },
    { email: 'anam.khan@griffithuni.edu.au',      password: 'pass123' },
  ];

  login() {
    const match = this.users.find(
      u => u.email === this.model.email && u.password === this.model.password
    );
    if (!match) {
      this.error = 'Invalid email or password.';
      return;
    }
    // Week 4: navigate directly
    this.router.navigate(['/profile']);
  }
}
