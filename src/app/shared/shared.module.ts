import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PopUpComponent } from './components/pop-up/pop-up.component';
import { AuthService } from './services/auth/auth.service';
import { UnsubscriberService } from './services/unsubscriber/unsubscriber.service';

@NgModule({
  declarations: [PopUpComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [PopUpComponent],
})
export class SharedModule {}
