import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Accountant} from '../../../../interface/accountant';
import {RoutesConstant} from '../../../../constants/routes-constant';

@Component({
  selector: 'app-accountants',
  templateUrl: './accountants.component.html',
  styleUrls: ['./accountants.component.css']
})
export class AccountantsComponent implements OnInit {

  accountants: Accountant[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(this.loadAccountants);
  }

  loadAccountants = (routeData: { accountants: Accountant[] }) => {
    this.accountants = routeData.accountants;
  }

  accountantDetails = (id: number): string => {
    return `/${RoutesConstant.ACCOUNTANTS_ROUTE}/${id}`;
  }

  openAddAccountant() {
    this.router.navigateByUrl(`/${RoutesConstant.ACCOUNTANTS_NEW}`);
  }
}
