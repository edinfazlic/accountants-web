import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Accountant} from '../../../../interface/accountant';

@Component({
  selector: 'app-accountants-list',
  templateUrl: './accountants-list.component.html',
  styleUrls: ['./accountants-list.component.css']
})
export class AccountantsListComponent {

  @Input()
  accountants: Accountant[] = [];

  @Input()
  getAccountantDetailsRoute: (id: number) => string;

  @Output()
  addButtonClicked: EventEmitter<void> = new EventEmitter<void>();

}
