import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  OnChanges,
} from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit, OnChanges {
  @Input()
  title!: string;

  @Output()
  click = new EventEmitter();

  constructor(public messageService: MessageService) {}

  ngOnInit(): void {}

  greet(): void {
    console.log('In Auth component');
  }

  onClick() {
    this.click.emit();
  }

  ngOnChanges() {
    console.log('Auth changes');
  }
}
