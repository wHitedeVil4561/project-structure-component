import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlContainer,
  FormGroup,
  FormGroupName,
  ReactiveFormsModule,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FormFieldComponent } from '../form-field/form-field.component';
import { ErrorHintDirective } from '../../directives/error-hint.directive';

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
      useExisting: forwardRef(() => FormGroupName),
    },
  ],
})
export class CommonAddressFormComponent {
  @Input({ required: true }) parentFormGroup!: FormGroup;
}
