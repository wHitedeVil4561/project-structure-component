import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-theme-wrapper',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './theme-wrapper.component.html',
  styleUrls: ['./theme-wrapper.component.scss'],
})
export class ThemeWrapperComponent {}
