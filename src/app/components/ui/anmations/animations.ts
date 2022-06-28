import { animate, animation, style } from '@angular/animations';

export const transitionAnimation = animation([
	style({
		height: '{{ height }}',
		opacity: '{{ opacity }}',
		backgroundColor: '{{ backgroundColor }}'
	}),
	animate('{{ time }}')
]);
