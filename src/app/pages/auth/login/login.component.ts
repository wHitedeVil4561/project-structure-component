import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormFieldComponent } from 'src/app/shared/components/form-field/form-field.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ErrorHintDirective } from 'src/app/shared/directives/error-hint.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    FormFieldComponent,
    ErrorHintDirective,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private fb: FormBuilder) {}
  loginForm: FormGroup = this.fb.group({
    email_phone: ['', [Validators.required]],
    password: ['', Validators.required],
  });
}
