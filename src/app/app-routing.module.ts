import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoutesConstant} from './constants/routes-constant';
import {AccountantComponent} from './features/accountant/containers/accountant/accountant.component';
import {AccountantsComponent} from './features/accountant/containers/accountants/accountants.component';
import {AccountantDetailsResolver} from './resolvers/accountant-details.resolver';
import {AccountantListResolver} from './resolvers/accountant-list.resolver';

const routes: Routes = [
  {
    path: RoutesConstant.ACCOUNTANTS_LIST,
    component: AccountantsComponent,
    resolve: { accountants: AccountantListResolver },
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
