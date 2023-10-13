import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ErrorHintDirective } from 'src/app/shared/directives/error-hint.directive';
import { FormFieldComponent } from 'src/app/shared/components/form-field/form-field.component';
import { FORM_VALIDATION } from 'src/app/config/form-validation.constant';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ReactiveFormsModule,
    ErrorHintDirective,
    FormFieldComponent,
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  fb: FormBuilder = inject(FormBuilder);
  signupForm: FormGroup = this.fb.group({
    name: ['', FORM_VALIDATION.name],
    email: ['', FORM_VALIDATION.email],
    phone: ['', FORM_VALIDATION.phone],
    password: ['', FORM_VALIDATION.password],
    confirm_password: [''],
  });
}
