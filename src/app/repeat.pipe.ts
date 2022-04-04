import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'repeat' })
export class RepeatPipe implements PipeTransform {
  transform(value: string | number, count: number = 1) {
    let str = '';

    for (let i = 0; i < count; i++) {
      str += ` ${value}`;
    }

    return str;
  }
}
