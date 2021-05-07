import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {RoutesConstant} from '../../../../constants/routes-constant';
import {Accountant} from '../../../../interface/accountant';
import {AccountantService} from '../../../../service/accountant.service';

@Component({
  selector: 'app-accountant-add',
  templateUrl: './accountant-add.component.html',
  styleUrls: ['./accountant-add.component.css']
})
export class AccountantAddComponent {

  backRoute = `/${RoutesConstant.ACCOUNTANTS_LIST}`;

  constructor(
    private accountantService: AccountantService,
    private router: Router,
  ) {
  }

  saveAccountant(accountant: Accountant) {
    this.accountantService.createAccountant(accountant).subscribe(() => {
      this.router.navigateByUrl(`/${RoutesConstant.ACCOUNTANTS_LIST}`);
    });
  }
}
