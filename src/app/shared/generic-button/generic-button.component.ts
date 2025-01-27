import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-generic-button',
  imports: [
    NgClass
  ],
  templateUrl: './generic-button.component.html',
  styleUrl: './generic-button.component.css'
})
export class GenericButtonComponent {
  @Input() buttonClass: string = 'button';
  @Input() disabled: boolean = false;
}
