import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Person, Gender,Name,NameForm} from 'gedcomx';
import {GedcomXService} from '../gedcomx/gedcomx.service';
import {GENDER_TYPE} from '../gedcomx/gedcomx.constants';
import {PersonNamePipe} from './person-name.pipe';
import {PersonGenderPipe} from './person-gender.pipe';
import {ConclusionComponent} from '../common/conclusion.component';
import {SubjectComponent} from '../common/subject.component';
import {NameComponent} from './names/name.component';
import {FactComponent} from '../common/fact.component';
import {PersonUtil} from './person-util';
import {CollapsibleFieldsetComponent} from '../common/collapsibleFieldset.component';

@Component({
    selector: 'person-detail',
    templateUrl: 'app/person/person-detail.component.html',
    styles: [``],
    pipes: [PersonNamePipe,PersonGenderPipe],
    directives:[ConclusionComponent,SubjectComponent,NameComponent,FactComponent,CollapsibleFieldsetComponent]
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
    isMale(){
      if(this.person.gender==undefined)
        return false;
      return this.person.gender.type==GENDER_TYPE.MALE;
    }
    isFemale(){
      if(this.person.gender==undefined)
        return false;
      return this.person.gender.type==GENDER_TYPE.FEMALE;
    }
    isUnknown(){
      if(this.person.gender==undefined)
        return true;
      return this.person.gender.type==GENDER_TYPE.UNKNOWN;
    }

    addName(){
      if(this.person.names==undefined){
        this.person.names = new Array<Name>();
      }
      var name:Name={nameForms:new Array<NameForm>({})};
      this.person.names.push(name);
    }

    getPersonName():string {
      return PersonUtil.getPersonName(this.person);
    }

    test():void{
      console.log("Test called");
    }
}
