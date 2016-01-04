import {Pipe} from 'angular2/core';
import {Person} from 'gedcomx';
import {FACT_TYPE} from '../gedcomx/gedcomx.constants';

@Pipe({name: 'personDeathDate'})
export class PersonDeathDatePipe {
  transform(person:Person) : any {
    if (person.facts!=undefined && person.facts.length>0){
      for (var fact of person.facts) {
        if (fact.type == FACT_TYPE.DEATH){
          return fact.date.original;
        }
      }
    }
    return "No death date defined";
  }
}
