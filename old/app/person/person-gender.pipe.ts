import {Pipe} from 'angular2/core';
import {Person} from 'gedcomx';
import {GENDER_TYPE} from '../gedcomx/gedcomx.constants';

@Pipe({name: 'personGender'})
export class PersonGenderPipe {
  transform(person:Person) : any {
    if (person.gender!=undefined){
      return person.gender.type;
    }
    return GENDER_TYPE.UNKNOWN;
  }
}
