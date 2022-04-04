import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-auth-wrapper',
  templateUrl: './auth-wrapper.component.html',
  styleUrls: ['./auth-wrapper.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AuthWrapperComponent implements OnInit {
  @ViewChild(AuthComponent)
  authComponent!: AuthComponent;

  title: string = 'Old title';

  constructor() {}

  ngOnInit(): void {}

  onChildTriggerClick() {
    this.authComponent.greet();
  }

  onChildButtonClick() {
    console.log('Calling from child');
  }

  changeTitle() {
    this.title = 'New title';
  }
}
