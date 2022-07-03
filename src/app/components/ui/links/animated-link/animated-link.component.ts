import { Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
	selector: 'app-animated-link',
	templateUrl: './animated-link.component.html',
	styleUrls: ['./animated-link.component.sass'],
	animations: [
		trigger('linkHovered', [
			state('start', style({})),
			state('end', style({
				color: 'white',
			})),
			transition('start => end', animate('600ms')),
			transition('end => start', animate('300ms'))
		])
	]
})
export class AnimatedLinkComponent {
	@Input() path = '';
	@Input() name = '';
	hovered = 'start';

}
