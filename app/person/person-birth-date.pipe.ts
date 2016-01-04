import {Pipe} from 'angular2/core';
import {Person} from 'gedcomx';
import {FACT_TYPE} from '../gedcomx/gedcomx.constants';

@Pipe({name: 'personBirthDate'})
export class PersonBirthDatePipe {
  transform(person:Person) : any {
    if (person.facts!=undefined && person.facts.length>0){
      for (var fact of person.facts) {
        if (fact.type == FACT_TYPE.BIRTH){
          return fact.date.original;
        }
      }
    }
    return "No birth date defined";
  }
}
