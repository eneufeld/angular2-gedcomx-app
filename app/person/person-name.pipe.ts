import {Pipe} from 'angular2/core';
import {Person} from 'gedcomx';
/**
  Return the name of a person.
  A person doesn't have any required fields, thus we are trying to get the most meaning full result.

  The first implementation only relies on the name.

  If the names field is not empty the following applies:
  In https://github.com/FamilySearch/gedcomx/blob/master/specifications/conceptual-model-specification.md#name-conclusion it is defined that names are given in preference order.
  Furthermore: The nameForms fiels is REQUIRED. At least one name form MUST be provided.
  On the other hand the nameForm element doesn't have any required fields:
  https://github.com/FamilySearch/gedcomx/blob/master/specifications/conceptual-model-specification.md#name-form

  We will check whether the fullName attribute is set and use it if so, otherwise we will try to concatenate the name parts.

**/
@Pipe({name: 'personName'})
export class PersonNamePipe {
  transform(person:Person) : any {
    if (person.names!=undefined && person.names.length>0){
      var nameForm=person.names[0].nameForms[0];
      if (nameForm.fullText!==undefined){
        return nameForm.fullText;
      }
      if (nameForm.parts!=undefined && nameForm.parts.length>0) {
        var result:string;
        for (var namePart of nameForm.parts) {
          if (result==undefined){
            result="";
          }
          else {
            result=result.concat(" ");
          }
          result=result.concat(namePart.value);
        }
        return result;
      }
    }
    return JSON.stringify(person);
  }
}
