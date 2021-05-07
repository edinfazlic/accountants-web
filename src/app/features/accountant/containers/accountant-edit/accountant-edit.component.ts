import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RoutesConstant} from '../../../../constants/routes-constant';
import {Accountant} from '../../../../interface/accountant';
import {AccountantService} from '../../../../service/accountant.service';

@Component({
  selector: 'app-accountant-edit',
  templateUrl: './accountant-edit.component.html',
  styleUrls: ['./accountant-edit.component.css']
})
export class AccountantEditComponent implements OnInit {

  backRoute;

  accountant: Accountant;

  constructor(
    private activatedRoute: ActivatedRoute,
    private accountantService: AccountantService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(this.loadAccountant);
  }

  loadAccountant = (routeData: { accountant: Accountant }) => {
    this.accountant = routeData.accountant;
    this.backRoute = `/${RoutesConstant.ACCOUNTANTS_DETAILS_BASE}/${this.accountant.id}`;
  }

  updateAccountant(accountant: Accountant) {
    this.accountantService.updateAccountant(this.accountant.id, accountant).subscribe(() => {
      this.router.navigateByUrl(`/${RoutesConstant.ACCOUNTANTS_LIST}`);
    });
  }
}
