import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FormFieldComponent } from '../form-field/form-field.component';
import { ErrorHintDirective } from '../../directives/error-hint.directive';
import { FORM_VALIDATION } from 'src/app/config/form-validation.constant';

@Component({
  selector: 'app-common-address-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    FormFieldComponent,
    ErrorHintDirective,
  ],
  templateUrl: './common-address-form.component.html',
  styleUrls: ['./common-address-form.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
})
export class CommonAddressFormComponent implements OnInit {
  fb: FormBuilder = inject(FormBuilder);
  parentContainer = inject(ControlContainer);
  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }
  ngOnInit(): void {
    console.log(this.parentContainer);

    this.parentFormGroup.addControl(
      'address',
      this.fb.group({
        street: ['', FORM_VALIDATION.street],
        landmark: ['', FORM_VALIDATION.landmark],
        pincode: ['', FORM_VALIDATION.pinCode],
      })
    );
  }
}
