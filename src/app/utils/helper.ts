import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ERROR_MESSAGES, ErrorTypes } from '../config/error.message';
import { HttpClient } from '@angular/common/http';

function checkErrorType(errors: [string, any][], key: ErrorTypes) {
  return errors.some(([errorKey, value]) => errorKey === key);
}
function getErrorMessage(errors: [string, any][], key: ErrorTypes) {
  return errors.find(([k, v]) => k === key)?.[1];
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

export function getErrorValidationMessage(
  formControlName: string,
  errors: [string, any][]
): string {
  switch (true) {
    case checkErrorType(errors, 'required'):
      return ERROR_MESSAGES['required'](formControlName);
    case checkErrorType(errors, 'invalidYear'):
      return ERROR_MESSAGES['invalidYear']();
    case checkErrorType(errors, 'invalidDate'):
      return ERROR_MESSAGES['invalidDate']();
    case checkErrorType(errors, 'email'):
      return ERROR_MESSAGES['email']();
    case checkErrorType(errors, 'pattern'):
      return ERROR_MESSAGES['pattern'](formControlName);
    case checkErrorType(errors, 'minlength'):
      const minRequirement = getErrorMessage(
        errors,
        'minlength'
      )?.requiredLength;
      return ERROR_MESSAGES['minlength'](formControlName, minRequirement);
    case checkErrorType(errors, 'maxlength'):
      const maxRequirement = getErrorMessage(
        errors,
        'maxlength'
      )?.requiredLength;
      return ERROR_MESSAGES['maxlength'](formControlName, maxRequirement);
    default:
      return '';
  }
}
