import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DropDownAnimation } from '@components/ui/animations/dropDownAnimation';

@Component({
	selector: 'app-drop-down',
	templateUrl: './drop-down.component.html',
	styleUrls: ['./drop-down.component.sass'],
	animations: [
		trigger('linkHovered', [
			state('start', style({})),
			state('end', style({
				color: 'white',
				fill: 'white'
			})),
			transition('start => end', animate('600ms')),
			transition('end => start', animate('300ms'))
		]),
		DropDownAnimation]
})
export class DropDownComponent {
	hovered = 'start';
	isOpened = false;

	swapDropDown() {
		this.isOpened = !this.isOpened;
	}

}
