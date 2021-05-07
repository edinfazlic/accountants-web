import {Component, EventEmitter, Input, Output} from '@angular/core';
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

  @Output()
  editAccountant: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  deleteAccountant: EventEmitter<number> = new EventEmitter<number>();

  edit() {
    this.editAccountant.emit(this.model.id);
  }

  delete() {
    this.deleteAccountant.emit(this.model.id);
  }

}
