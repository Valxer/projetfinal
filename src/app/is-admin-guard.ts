import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class IsAdminGuard implements CanActivate{

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (JSON.parse(sessionStorage.getItem("admin")))
            return true
        else{
            this.router.navigate(['accueil'])
            return false
        }
    }
}
