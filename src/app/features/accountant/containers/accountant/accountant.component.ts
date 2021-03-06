import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Accountant} from '../../../../interface/accountant';
import {RoutesConstant} from '../../../../constants/routes-constant';
import {AccountantService} from '../../../../service/accountant.service';

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
    private accountantService: AccountantService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(this.loadAccountant);
  }

  loadAccountant = (routeData: { accountant: Accountant }) => {
    this.accountant = routeData.accountant;
  }

  onEditAccountant = (id: number): void => {
    this.router.navigateByUrl(`/${RoutesConstant.ACCOUNTANTS_EDIT_BASE}/${id}`);
  }

  onDeleteAccountant = (id: number): void => {
    this.accountantService.deleteAccountant(id).subscribe(() => {
      this.router.navigateByUrl(`/${RoutesConstant.ACCOUNTANTS_LIST}`);
    });
  }
}
