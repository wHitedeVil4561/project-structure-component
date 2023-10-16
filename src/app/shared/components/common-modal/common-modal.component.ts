import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { OtpComponent } from '../otp/otp.component';

@Component({
  selector: 'app-common-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    TranslateModule,
    ReactiveFormsModule,
    OtpComponent,
  ],
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.scss'],
})
export class CommonModalComponent {
  constructor(public matdialogRef: MatDialogRef<CommonModalComponent>) {
    this.otp.valueChanges.subscribe((res) => {
      console.log(res);
    });
  }
  otp: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
}
