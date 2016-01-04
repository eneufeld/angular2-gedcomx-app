import {Injectable} from 'angular2/core';
import {Person} from 'gedcomx';
import {GEDCOMX_DUMMY} from './gedcomx.dummy'

@Injectable()
export class GedcomXService {
  getPersons() {
    return Promise.resolve(GEDCOMX_DUMMY.persons);
  }
}
