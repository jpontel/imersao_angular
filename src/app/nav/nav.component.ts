import {GenericButtonComponent} from '../shared/generic-button/generic-button.component';
import {AccountService} from '../_services/account.service';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-nav',
  imports: [
    GenericButtonComponent,
    FormsModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  private accountService = inject(AccountService);
  loggedIn: boolean = false;
  model: any = {};

  login() {
    this.accountService.login(this.model).subscribe({
      next: (response) => {
        this.loggedIn = true;
        console.log('Login Successful', response);
      },
      error: (error) => {
        console.log('Login Failed', error);
      }
    });
  };

  logout() {
    this.loggedIn = false;
  }
}
