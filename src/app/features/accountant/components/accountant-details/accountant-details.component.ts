import {Component, Input} from '@angular/core';
import {Accountant} from '../../../../interface/accountant';

@Component({
  selector: 'app-accountant-details',
  templateUrl: './accountant-details.component.html',
  styleUrls: ['./accountant-details.component.css']
})
export class AccountantDetailsComponent {

  @Input()
  model: Accountant;

  @Input()
  backRoute: string;

}
