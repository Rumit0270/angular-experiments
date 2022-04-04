import { Component, OnChanges, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  FormArray,
  Validators,
} from '@angular/forms';
import { forbiddenPasswords } from '../validators';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.css'],
})
export class FormsDemoComponent implements OnInit, OnChanges {
  textInput: FormControl = new FormControl('');
  templateText: string = '';

  signUpForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    rememberPassword: new FormControl(false),
    address: new FormGroup({
      street: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: [
      '',
      [Validators.required, Validators.minLength(4), forbiddenPasswords()],
    ],
    aliases: this.fb.array([this.fb.control('')]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  ngOnChanges() {
    console.log('Change in Forms ');
  }

  get aliases() {
    return this.loginForm.get('aliases') as FormArray;
  }

  get loginPassword() {
    return this.loginForm.get('password');
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onButtonClick() {
    console.log(this.textInput.value);
    console.log(this.templateText);
  }

  onSignUpSubmit() {
    console.log(this.signUpForm.value);
  }

  onSignInSubmut() {
    console.log(this.loginForm.value);
    console.log(this.loginForm);
  }
}
