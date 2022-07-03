import { Component, Input, OnInit } from '@angular/core';
import { buttonAnimation } from '@components/ui/animations/dropDownAnimation';

@Component({
  selector: 'app-blue-button',
  templateUrl: './blue-button.component.html',
  styleUrls: ['./blue-button.component.sass'],
	animations: [buttonAnimation]
})
export class BlueButtonComponent {
	@Input() label?: string;
}
