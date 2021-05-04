import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AccountantDetailsComponent} from './features/accountant/components/accountant-details/accountant-details.component';
import {AccountantComponent} from './features/accountant/containers/accountant/accountant.component';
import {AccountantsListComponent} from './features/accountant/components/accountants-list/accountants-list.component';
import {AccountantsComponent} from './features/accountant/containers/accountants/accountants.component';
import {AccountantDetailsResolver} from './resolvers/accountant-details.resolver';
import {AccountantListResolver} from './resolvers/accountant-list.resolver';
import {AccountantService} from './service/accountant.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountantComponent,
    AccountantsComponent,
    AccountantDetailsComponent,
    AccountantsListComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AccountantService,
    AccountantListResolver,
    AccountantDetailsResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
