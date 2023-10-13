import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent {
  constructor(
    private fb: FormBuilder,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}
  @Input() config: { length?: number; allowOnlyNumber?: boolean } = {
    length: 4,
    allowOnlyNumber: false,
  };
}
