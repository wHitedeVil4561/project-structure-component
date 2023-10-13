import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-container',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div
      class="p-8 flex flex-col relative gap-5 min-h-screen h-full bg-light-white"
    >
      <div
        class="bg-circle fixed bottom-0 left-0 w-full h-2/5 linear-gradient-1"
      >
        &nbsp;
      </div>
      <div class="flex gap-3 items-center">
        <span class="text-2xl font-semibold logo-text font-source"
          >Web Chat</span
        >
      </div>
      <div class="outlet">
        <router-outlet #outlet="outlet"></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./auth-container.component.scss'],
})
export class AuthContainerComponent {}
