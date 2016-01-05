import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {GedcomXService} from '../gedcomx/gedcomx.service';
import {Person} from 'gedcomx';
import {PersonNamePipe} from './person-name.pipe';
import {PersonBirthDatePipe} from './person-birth-date.pipe';
import {PersonDeathDatePipe} from './person-death-date.pipe';
import {PersonGenderPipe} from './person-gender.pipe';

@Component({
    selector: 'person-list',
    template:`
    <h2>All Persons</h2>
    <ul class="persons">
      <li *ngFor= "#person of persons" [ngClass]="person | personGender | slice:19 | lowercase">
        <div class="info">
          <div class="name">
            {{person | personName}}
          </div>
          <div class="additional">
            <span class="birth">{{person | personBirthDate}}</span> <span class="death">{{person | personDeathDate}}</span>
          </div>
        </div>
        <div class="actions">
          <a href="/">Edit</a>
          <a href="/">Anc</a><!--Ancestors-->
          <a href="/">Des</a><!--Descendant-->
        </div>
      </li>
    </ul>
    `,
    styleUrls:["app/person/persons.component.css"],
    pipes: [PersonNamePipe,PersonBirthDatePipe,PersonDeathDatePipe,PersonGenderPipe]
})
export class PersonsComponent implements OnInit {
  public persons: Person[];
  constructor(private _gedcomXService: GedcomXService) { }
  ngOnInit() {
    this.getPersons();
  }
  getPersons() {
    this._gedcomXService.getPersons().then(persons => this.persons = persons);
  }
}
