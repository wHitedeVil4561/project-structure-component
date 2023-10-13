import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Pipe({
  name: 'getFormControl',
  standalone: true,
})
export class GetFormControlPipe implements PipeTransform {
  transform(value: FormGroup, controlName: string): AbstractControl | null {
    return value.get(controlName);
  }
}
