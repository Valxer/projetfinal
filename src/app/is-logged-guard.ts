import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class IsLoggedGuard implements CanActivate{

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (JSON.parse(sessionStorage.getItem("client")))
            return true
        else{
            this.router.navigate(['connexion'])
            return false
        }
    }
}
