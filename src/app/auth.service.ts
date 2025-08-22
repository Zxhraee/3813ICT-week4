import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  //String to store user current user data
  private key = 'currentUser';

  //retrieve user data dring from storage and pass into object if exists, otherwise return null
  get currentUser() {
    const raw = localStorage.getItem(this.key);
    return raw ? JSON.parse(raw) : null;
  }

  //if user is true, convert to string and save
  //if false delete key from storage
  set currentUser(user: any | null) {
    if (user) localStorage.setItem(this.key, JSON.stringify(user));
    else localStorage.removeItem(this.key);
  }

  //Return true if user is existing
  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  //If user false clear storage
  logout() {
    this.currentUser = null;
  }
}