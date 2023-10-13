import { Component, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHintDirective } from '../../directives/error-hint.directive';
import { FormValidationPipe } from '../../pipes/form-validation.pipe';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [CommonModule, FormValidationPipe],
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent {
  @ContentChild(ErrorHintDirective, { static: true })
  errorHintDirective!: ErrorHintDirective;
}
