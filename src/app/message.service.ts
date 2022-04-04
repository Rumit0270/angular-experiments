import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private messagesSubject = new Subject<string>();

  public messages$ = this.messagesSubject.asObservable();

  emitMessage(message: string) {
    this.messagesSubject.next(message);
    // this.messagesSubject.complete();
  }
}
