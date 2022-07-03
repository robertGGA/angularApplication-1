import { animate, query, sequence, stagger, state, style, transition, trigger } from '@angular/animations';


export const DropDownAnimation = trigger('dropDownMenu', [
	transition(':enter', [
		style({ height: 0, overflow: 'hidden' }),
		query('.menu-item', [
			style({ opacity: 0, transform: 'translateY(-100px)' })
		]),
		sequence([
			animate('300ms', style({ height: '*' })),
			query('.menu-item', [
				stagger(-50, [
					animate('400ms ease', style({ opacity: 1, transform: 'none' }))
				])
			])
		])
	]),

	transition(':leave', [
		style({ height: '*', overflow: 'hidden' }),
		query('.menu-item', [style({ opacity: 1, transform: 'none' })]),
		sequence([
			query('.menu-item', [
				stagger(50, [
					animate(
						'400ms ease',
						style({ opacity: 0, transform: 'translateY(-50px)' })
					)
				])
			]),
			animate('200ms', style({ height: 0 }))
		])
	])
]);

export const buttonAnimation = trigger('buttonHover', [
	state('start', style({
	})),
	state('end', style({
		border: '1px solid white',
		color: 'white'
	})),
	transition('start => end', animate('200ms')),
	transition('end => start', animate('300ms'))
]);
