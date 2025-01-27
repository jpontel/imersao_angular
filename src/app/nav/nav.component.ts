import { Component } from '@angular/core';
import {GenericButtonComponent} from '../shared/generic-button/generic-button.component';

@Component({
  selector: 'app-nav',
  imports: [
    GenericButtonComponent
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
