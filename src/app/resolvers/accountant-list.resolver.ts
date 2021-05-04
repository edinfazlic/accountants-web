import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Accountant} from '../interface/accountant';
import {AccountantService} from '../service/accountant.service';

@Injectable()
export class AccountantListResolver implements Resolve<Accountant[]> {

  constructor(
    private accountantService: AccountantService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Accountant[]> {
    return this.accountantService.getList();
  }

}
