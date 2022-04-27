import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services';
import { Store } from '@ngrx/store';
import { selectCurrentAuth } from '../store/selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(selectCurrentAuth).pipe(
      map(auth => {
        const isLoggedIn = auth.isLoggedIn;
        if ( !isLoggedIn ) {
          this.router.navigate( [ '/login' ] );
        }
        return isLoggedIn;
      })
    );
  }

}
