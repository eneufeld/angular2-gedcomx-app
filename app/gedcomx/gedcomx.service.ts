import {Injectable} from 'angular2/core';
import {Person} from 'gedcomx';
import {GEDCOMX_DUMMY} from './gedcomx.dummy'

@Injectable()
export class GedcomXService {
  constructor() {
    console.log("GedcomXService created")
  }
  getPersons() {
    return Promise.resolve(GEDCOMX_DUMMY.persons);
  }
  getPerson(id:string){
    return Promise.resolve(GEDCOMX_DUMMY.persons).then(persons => persons.filter(p => p.id === id)[0]);
  }
}
