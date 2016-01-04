import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES } from 'angular2/router';
import {GedcomXService} from './gedcomx/gedcomx.service';
import {PersonsComponent} from './person/persons.component';

@Component({
    selector: 'my-app',
    template:
    `
    <h2>My App</h2>
    <a [routerLink]="['Persons']">List of Persons</a>
    <router-outlet></router-outlet>
    `,
    styles:[`
      a.router-link-active {color: #039be5;}
    `],
    directives:[ROUTER_DIRECTIVES],
    providers: [GedcomXService]
})
@RouteConfig([
  { path: '/personlist', component: PersonsComponent, name: 'Persons',useAsDefault: true }
])
export class AppComponent  {
}
