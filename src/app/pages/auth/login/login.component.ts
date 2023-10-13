import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormFieldComponent } from 'src/app/shared/components/form-field/form-field.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ErrorHintDirective } from 'src/app/shared/directives/error-hint.directive';
import { TranslateModule } from '@ngx-translate/core';
import { FORM_VALIDATION } from 'src/app/config/form-validation.constant';
import { CommonAddressFormComponent } from 'src/app/shared/components/common-address-form/common-address-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    FormFieldComponent,
    ErrorHintDirective,
    TranslateModule,
    CommonAddressFormComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private fb: FormBuilder) {
    this.loginForm.valueChanges.subscribe((res) => console.log(res));
  }
  loginForm: FormGroup = this.fb.group({
    email_phone: ['', FORM_VALIDATION.email_phone],
    password: ['', FORM_VALIDATION.password],
    address: this.fb.group({
      street: ['', FORM_VALIDATION.street],
      landmark: ['', FORM_VALIDATION.landmark],
      pincode: ['', FORM_VALIDATION.pinCode],
    }),
  });
}
