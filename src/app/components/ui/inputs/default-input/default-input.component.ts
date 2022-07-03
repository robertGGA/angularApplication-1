import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-default-input',
  templateUrl: './default-input.component.html',
  styleUrls: ['./default-input.component.sass'],
	providers: [{
	  provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => DefaultInputComponent),
		multi: true
	}]

})
export class DefaultInputComponent implements OnInit, ControlValueAccessor{
	@Input() type: string = 'text';
	@Input() label?: string;
	@Input() formName: string = '';
	onChange: any;
	onTouch: any;

	inputControl = new FormControl();

	ngOnInit(): void {
		this.inputControl.valueChanges.subscribe((value) => {
			if(this.onChange) {
				this.onChange(value);
			}
		})
	}

	registerOnChange(fn: any): void {
		this.onChange =  fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouch = fn;
	}

	writeValue(obj: any): void {
		this.inputControl.setValue(obj);
	}

}
