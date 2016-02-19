import {Component} from 'angular2/core';

import {RubberDuckMessageService} from './rubber-duck.service';

@Component({
    selector: 'gh-rubber-duck',
    templateUrl: 'app/rubber-duck/rubber-duck.component.html',
    providers: [RubberDuckMessageService]
})
export class RubberDuckComponent {
  private userMessage: string;
  private messages: string[] = [];
  private duckTimeout: number;

  constructor(private _duckMessages: RubberDuckMessageService) {}

  _getTimeSent() {
    return new Date().toLocaleTimeString();
  }

  addMessage() {
    if (this.duckTimeout) {
      clearTimeout(this.duckTimeout);
    }
    this.messages.unshift(`You: ${this.userMessage} <small class='pull-right time-text'>${this._getTimeSent()}</small>`);
    this.userMessage = '';
    this.duckTimeout = setTimeout(this.addDuckMessage.bind(this), 4000);
  }

  addDuckMessage() {
    this.messages.unshift(`Duck: ${this._duckMessages.getMessage()} <small class='pull-right time-text'>${this._getTimeSent()}</small>`);
  }
}
