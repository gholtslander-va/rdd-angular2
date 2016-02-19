import {Component} from 'angular2/core';

import {RubberDuckComponent} from './rubber-duck/rubber-duck.component';

@Component({
    selector: 'gh-app',
    template: `
    <div class='container'>
      <h1>The <em>Infamous</em> Rubber Duck Debugger</h1>
      <gh-rubber-duck></gh-rubber-duck>
    </div>
    `,
    directives: [RubberDuckComponent]
})
export class AppComponent { }
