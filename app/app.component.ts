import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES } from 'angular2/router';
import {GedcomXService} from './gedcomx/gedcomx.service';
import {PersonsComponent} from './person/persons.component';
import {PersonDetailComponent} from './person/person-detail.component';
import {HomeComponent} from './home.component';

@Component({
    selector: 'my-app',
    template:`
    <div>
      <a [routerLink]="['Home']">Home</a>
      <a [routerLink]="['Persons']">List of Persons</a>
    </div>
    <router-outlet></router-outlet>
    `,
    styles:[`
      a {
        padding: 5px 10px;
        text-decoration: none;
        margin-top: 10px;
        display: inline-block;
        background-color: #eee;
        border-radius: 4px;
      }
      a:visited, a:link {
        color: #607D8B;
      }
      a:hover {
        color: #039be5;
        background-color: #CFD8DC;
      }
      a.router-link-active {
        color: #039be5;
      }
    `],
    directives:[ROUTER_DIRECTIVES],
    providers: [GedcomXService]
})
@RouteConfig([
  { path: '/home', component: HomeComponent, name: 'Home' ,useAsDefault: true },
  { path: '/personlist', component: PersonsComponent, name: 'Persons'},
  {path: '/person/:id', name: 'PersonDetail', component: PersonDetailComponent},
])
export class AppComponent  {
}
