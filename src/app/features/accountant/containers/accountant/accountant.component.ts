import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Accountant} from '../../../../interface/accountant';
import {RoutesConstant} from '../../../../constants/routes-constant';

@Component({
  selector: 'app-accountant',
  templateUrl: './accountant.component.html',
  styleUrls: ['./accountant.component.css']
})
export class AccountantComponent implements OnInit {

  backRoute = `/${RoutesConstant.ACCOUNTANTS_LIST}`;

  accountant: Accountant;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(this.loadAccountant);
  }

  loadAccountant = (routeData: { accountant: Accountant }) => {
    this.accountant = routeData.accountant;
  }
}
