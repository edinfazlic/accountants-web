import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Accountant} from '../interface/accountant';

@Injectable()
export class AccountantService {

  accountantsApi = `${environment.api}/accountant`;

  constructor(private http: HttpClient) {
  }

  getList(): Observable<Accountant[]> {
    return this.http.get<Accountant[]>(this.accountantsApi);
  }

  getSingle(id: number): Observable<Accountant> {
    return this.http.get<Accountant>(`${this.accountantsApi}/${id}`);
  }
}
