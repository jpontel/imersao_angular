import {RegisterComponent} from '../register/register.component';
import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [
    RegisterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  http = inject(HttpClient);
  registerMode = false;
  users: any;

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('http://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.error(error),
      complete: () => console.log('Request completed')
    })
  };

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}
