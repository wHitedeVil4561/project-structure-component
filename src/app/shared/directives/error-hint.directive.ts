import { Directive, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appErrorHint]',
  standalone: true,
})
export class ErrorHintDirective {
  @Input() controlName!: string;
  @Input() formControlName!: string;
  constructor(@Optional() @Self() public ngControl: NgControl) {}
}
