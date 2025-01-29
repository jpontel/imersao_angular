import {FormsModule} from '@angular/forms';
import {Component, EventEmitter, inject, input, Input, output, Output} from '@angular/core';
import {AccountService} from '../_services/account.service';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private accountService = inject(AccountService)
  cancelRegister = output<boolean>();
  model: any = {};

  register() {
    this.accountService.register(this.model).subscribe({
      next: response => {
        console.log(response);
        this.cancel();
      },
      error: err => console.log(err)
    })
  };

  cancel() {
    this.cancelRegister.emit(false);
  }
}
