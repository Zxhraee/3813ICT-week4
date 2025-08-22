import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-profile',
  standalone: true, 
  imports: [FormsModule, NgIf],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent implements OnInit {
  //Object to hold current user data
  user: any = null;

  constructor(private router: Router, private auth: AuthService) {}

  //If user not logged in navigate to login route page
  ngOnInit(): void {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }
    
    //If logged in, display stored user data on profile form
    this.user = { ...this.auth.currentUser };
  }

  //Save edited user data back to storage
  save(): void {
    this.auth.currentUser = this.user;
    alert('Profile saved to localStorage');
  }
}