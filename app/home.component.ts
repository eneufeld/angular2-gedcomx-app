import {Component} from 'angular2/core';
@Component({
    selector: 'home',
    template:`
      <h1>Eugens Angular2 Application for editing GedcomX</h1>
      <h2>Welcome to our app</h2>
      <p>
        This is the landing page. You can do awesome stuff from here.
      </p>
      <p>This is work in progress. The Service provides only dummy data and doesn't allow to load real stuff in the moment.</p>
    `,
    styles:[`
    `]
})
export class HomeComponent  {
}
