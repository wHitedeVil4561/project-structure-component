import { Pipe, PipeTransform } from '@angular/core';
import { ErrorHintDirective } from '../directives/error-hint.directive';
import { getErrorValidationMessage } from 'src/app/utils/helper';

@Pipe({
  name: 'formValidation',
  standalone: true,
})
export class FormValidationPipe implements PipeTransform {
  transform(
    errorObj: any,
    errorDirective: ErrorHintDirective,
    touched: boolean | null
  ): string {
    console.log(errorDirective);

    const errors = Object.entries(errorObj ?? {});
    if (!errors.length || !touched) return '';
    const controlName =
      errorDirective.controlName ?? errorDirective.formControlName;
    return getErrorValidationMessage(controlName, errors);
  }
}
