import {GenericButtonComponent} from '../shared/generic-button/generic-button.component';
import {AccountService} from '../_services/account.service';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-nav',
  imports: [
    GenericButtonComponent,
    BsDropdownModule,
    FormsModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  accountService = inject(AccountService);
  model: any = {};

  login() {
    this.accountService.login(this.model).subscribe({
      next: (response) => {
        console.log('Login Successful', response);
      },
      error: (error) => {
        console.log('Login Failed', error);
      }
    });
  };

  logout() {
    this.accountService.logout();
  };

  protected readonly localStorage = localStorage;
}
