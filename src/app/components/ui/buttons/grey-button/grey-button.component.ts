import { Component, Input, OnInit } from '@angular/core';
import { buttonAnimation } from '@components/ui/animations/dropDownAnimation';

@Component({
	selector: 'app-grey-button',
	templateUrl: './grey-button.component.html',
	styleUrls: ['./grey-button.component.sass'],
	animations: [buttonAnimation]
})
export class GreyButtonComponent {
	@Input() label?: string;

	state = 'start';
}
