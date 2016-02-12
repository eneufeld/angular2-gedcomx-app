import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Person, Gender} from 'gedcomx';
import {GedcomXService} from '../gedcomx/gedcomx.service';
import {GENDER_TYPE} from '../gedcomx/gedcomx.constants';
import {PersonNamePipe} from './person-name.pipe';
import {PersonGenderPipe} from './person-gender.pipe';
import {ConclusionComponent} from '../common/conclusion.component';
import {SubjectComponent} from '../common/subject.component';
import {NamesComponent} from './names.component';
import {FactsComponent} from '../common/facts.component';

@Component({
    selector: 'person-detail',
    templateUrl: 'app/person/person-detail.component.html',
    styles: [``],
    pipes: [PersonNamePipe,PersonGenderPipe],
    directives:[ConclusionComponent,SubjectComponent,NamesComponent,FactsComponent]
})
export class PersonDetailComponent implements OnInit {
    public person: Person;

    constructor(private _gedcomXService: GedcomXService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        if (!this.person) {
            let id = this._routeParams.get('id');
            this._gedcomXService.getPerson(id).then(person => this.person = person);
        }
    }

    createGender() {
        this.person.gender = { "type": GENDER_TYPE.UNKNOWN };
    }
    getAllGenderTypes() {
        return GENDER_TYPE.ALL;
    }
}
