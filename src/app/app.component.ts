import {AccountService} from './_services/account.service';
import {Component, inject, OnInit} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {NavComponent} from './nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [NavComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  accountService = inject(AccountService)
  title = 'DatingApp';

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }
}
