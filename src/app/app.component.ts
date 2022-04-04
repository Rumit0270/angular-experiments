import { Component, Inject, OnChanges, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { LoggerService } from './services/logger.service';

import { LanguageToken } from './languages';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges {
  constructor(
    private logService: LoggerService,
    private messageService: MessageService,
    private apiService: ApiService,
    @Inject(LanguageToken) private languages: string[]
  ) {}

  title = 'App component';

  ngOnInit() {
    this.apiService.getTodos().subscribe(
      (res) => {
        console.log(res);
      },
      () => {},
      () => console.log('Complete: todos request')
    );
  }

  ngOnChanges() {
    console.log('On changes');
  }

  onButtonClick() {
    this.logService.log('Hello there');
    this.logService.log(JSON.stringify(this.languages));

    this.title = 'Title changed';
  }

  emitMessage() {
    const randomStr = (Math.random() + 1).toString(36).substring(7);

    this.messageService.emitMessage(randomStr);
  }

  onAuthorize() {
    localStorage.setItem('authorized', 'true');
  }
}
