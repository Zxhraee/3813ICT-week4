import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  //If user logged in, return Login state true
  if (auth.isLoggedIn()) {
    return true;
  }

  //If user not logged in, return false state and navigate to login page 
  router.navigate(['/login']);
  return false;
};
