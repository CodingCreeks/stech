import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { AuthService } from "app/auth/auth.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    constructor(private authService: AuthService) { }

    //    canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //         this.authService.isAuthenticated();
    //     }

}