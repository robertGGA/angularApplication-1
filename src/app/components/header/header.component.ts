import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
	selector: 'Header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass'],
	animations: [
		trigger('linkHovered', [
			state('start', style({})),
			state('end', style({
				color: 'white',
				fill: 'white'
			})),
			transition('start => end', animate('600ms')),
			transition('end => start', animate('300ms'))
		])
	]
})
export class HeaderComponent {
	hovered = 'start';
}
