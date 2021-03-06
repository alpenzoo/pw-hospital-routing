/* 
 * Service which ensure that the user
 * is logined before start using the
 * application.
 */
import { Injectable, Inject } from '@angular/core';
import { CanActivate } from '@angular/router';
import { SearchPlacesComponent } from '../search-places/search-places.component';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoginActivateGuard implements CanActivate {
    constructor(private router: Router) {

    }
    canActivate() {
        // check the local storage item value
        if (localStorage.getItem('isLogined') == 'true') {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }

}