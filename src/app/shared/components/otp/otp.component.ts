import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: OtpComponent,
      multi: true,
    },
  ],
})
export class OtpComponent implements OnInit, ControlValueAccessor {
  constructor(
    private fb: FormBuilder,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}
  @Input() config: { length?: number; allowOnlyNumber?: boolean } = {
    length: 4,
    allowOnlyNumber: false,
  };
  ngOnInit(): void {
    this.otpForm = this.fb.group({
      otp: this.fb.array(
        Array(this.config?.length || 4)
          .fill(1)
          .map((item: number) => new FormControl(null, [Validators.required]))
      ),
    });
  }
  otpForm!: FormGroup;
  onchange!: (value: string) => void;
  onTouch!: () => void;
  writeValue(value: number): void {
    if (value) this.otpForm.patchValue({ otp: String(value).split('') });
  }
  registerOnChange(fn: any): void {
    this.onchange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log(isDisabled);
    if (isDisabled) {
      this.otpForm.disable();
    }
  }
  get otpInput() {
    return this.otpForm.get('otp') as FormArray;
  }
  keyUpEvent(event: KeyboardEvent, index: number) {
    const flag = this.otpInput.controls.every((control) => {
      return control.value;
    });
    if (flag) this.onTouch();
    let pos = index;
    if (event.keyCode === 8 && event.which === 8) {
      pos = index - 1;
    } else {
      pos = index + 1;
    }
    if (
      !this.otpForm.get('otp')?.get(String(index))?.valid &&
      !(event.keyCode === 8 && event.which === 8)
    ) {
      const { otp } = this.otpForm.value;
      console.log(otp);
      this.onchange(otp.join(''));
      return;
    }
    if (pos > -1 && pos < (this.config?.length || 4)) {
      const { otp } = this.otpForm.value;
      console.log(otp);
      this.onchange(otp.join(''));
      this.renderer.selectRootElement(`#input${pos}`).focus();
    } else if (pos == (this.config?.length || 4)) {
      const { otp } = this.otpForm.value;
      console.log(otp);
      this.onchange(otp.join(''));
      const buttonElement =
        this.elementRef.nativeElement.querySelector('#myButton');
      if (buttonElement) {
        this.renderer.selectRootElement(buttonElement).focus();
      }
    }
  }
}
