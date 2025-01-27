import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CommonModule, NgFor} from '@angular/common';
import {NavComponent} from './nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  http = inject(HttpClient);
  title = 'DatingApp';
  users: any;

  ngOnInit() {
    const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJndWlkZSIsIm5iZiI6MTczNzk5NTAxMSwiZXhwIjoxNzM4NTk5ODExLCJpYXQiOjE3Mzc5OTUwMTF9.oYZ05M1JbSRxZOG09g8aqd3E__O5WGLOCVoS99Kzy34uW-aNmCpePfmiBcViZteJTcqg22a1xmu05OC0vTza5w";
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get('http://localhost:5001/api/users', {headers}).subscribe({
      next: response => this.users = response,
      error: error => console.error(error),
      complete: () => console.log('Request completed')
    })
  }
}
