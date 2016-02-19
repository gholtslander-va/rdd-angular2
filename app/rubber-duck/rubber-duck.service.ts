import {Injectable} from 'angular2/core';

@Injectable()
export class RubberDuckMessageService {
  private messages: string[] = [
    'Hmmm.',
    'Okay.',
    'I see.',
    'Alright.',
    'Interesting.',
    'OK',
    'I\'m with you.',
    'Following.',
    'Huh.',
  ];

  getMessage() {
    return this.messages[Math.floor(Math.random() * this.messages.length)];
  }
}
