import { Validators } from '@angular/forms';
import { REGEX_CONSTANT } from './regex.constant';

export const FORM_VALIDATION = {
  email_phone: [
    Validators.required,
    Validators.pattern(REGEX_CONSTANT.email_phone),
  ],
  password: [Validators.required, Validators.pattern(REGEX_CONSTANT.password)],
  email: [Validators.required, Validators.pattern(REGEX_CONSTANT.email)],
  name: [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(100),
  ],
  phone: [Validators.required, Validators.pattern(REGEX_CONSTANT.phone)],
  street: [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(100),
  ],
  landmark: [Validators.minLength(2), Validators.maxLength(100)],
  pinCode: [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(6),
  ],
};
