import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoutesConstant} from './constants/routes-constant';
import {AccountantAddComponent} from './features/accountant/containers/accountant-add/accountant-add.component';
import {AccountantEditComponent} from './features/accountant/containers/accountant-edit/accountant-edit.component';
import {AccountantComponent} from './features/accountant/containers/accountant/accountant.component';
import {AccountantsComponent} from './features/accountant/containers/accountants/accountants.component';
import {AccountantDetailsResolver} from './resolvers/accountant-details.resolver';
import {AccountantListResolver} from './resolvers/accountant-list.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutesConstant.ACCOUNTANTS_LIST,
    pathMatch: 'full'
  },
  {
    path: RoutesConstant.ACCOUNTANTS_LIST,
    component: AccountantsComponent,
    resolve: { accountants: AccountantListResolver },
  },
  {
    path: RoutesConstant.ACCOUNTANTS_NEW,
    component: AccountantAddComponent,
  },
  {
    path: RoutesConstant.ACCOUNTANTS_EDIT,
    component: AccountantEditComponent,
    resolve: { accountant: AccountantDetailsResolver },
  },
  {
    path: RoutesConstant.ACCOUNTANTS_DETAILS,
    component: AccountantComponent,
    resolve: { accountant: AccountantDetailsResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
