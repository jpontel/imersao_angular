import {FormsModule} from '@angular/forms';
import {Component} from '@angular/core';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  model: any = {};

  register() {
    console.log(this.model);
  }

  cancel() {
    console.log("cancelled")
  }

}
