import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private _router: Router) { }


    public canActivate(route: ActivatedRouteSnapshot): boolean {
      const id = +route.url[1].path;
      if (isNaN(id) || id < 1){
        alert('Invalid product id');
        this._router.navigate(['/products']);
        return false;
      }
      return true;
    }
}
