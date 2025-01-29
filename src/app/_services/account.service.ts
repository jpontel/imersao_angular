import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../_models/user';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);
  baseUrl = 'http://localhost:5001/api/';
  currentUser = signal<User | null>(null);

  login(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map(user => {
        if (user) {
          console.log(user);
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUser.set(user);
        }
      })
    )
  };

  logout() {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  };
}
