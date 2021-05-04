import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {RoutesConstant} from '../constants/routes-constant';
import {Accountant} from '../interface/accountant';
import {AccountantService} from '../service/accountant.service';

@Injectable()
export class AccountantDetailsResolver implements Resolve<Accountant> {

  constructor(
    private accountantService: AccountantService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Accountant> {
    return this.accountantService.getSingle(route.params[RoutesConstant.ACCOUNTANT_ID]);
  }

}
