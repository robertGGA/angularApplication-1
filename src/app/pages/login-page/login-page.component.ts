import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent {
	formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
	  this.formGroup = this.formBuilder.group({
		  login: ['', [
			  Validators.required,
			  ]],
		  password: ['', [
			  Validators.required
		  ]]
	  })
  }


  ngOnInit(): void {
	  this.formGroup.valueChanges.subscribe((value) => {
		  console.log(value);
	  })
  }



}
