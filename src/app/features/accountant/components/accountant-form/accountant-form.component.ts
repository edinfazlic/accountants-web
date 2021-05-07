import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Accountant} from '../../../../interface/accountant';

@Component({
  selector: 'app-accountant-form',
  templateUrl: './accountant-form.component.html',
  styleUrls: ['./accountant-form.component.css']
})
export class AccountantFormComponent implements OnInit {

  @Input()
  backRoute: string;

  @Input()
  accountant: Accountant = {
    name: null,
    employed: false,
  };

  @Output()
  submitAccountant: EventEmitter<Accountant> = new EventEmitter<Accountant>();

  form: FormGroup;


  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.accountant.name],
      employed: [this.accountant.employed]
    });
  }

  handleFormSubmit(): void {
    // let object = {
    //
    // };
    this.submitAccountant.emit(this.form.value);
  }
}
