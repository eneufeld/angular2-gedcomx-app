import {Component, OnInit,Input} from 'angular2/core';
import {Name,NameForm} from 'gedcomx';
import {NAME_TYPE} from '../gedcomx/gedcomx.constants';
import {NameFormsComponent} from './name-forms.component';

@Component({
    selector: 'names',
    template: `
    <div>
      <button (click)="addName()">Add Name</button>
      <fieldset *ngIf="data">
        <legend>Names</legend>
        <div *ngFor="#name of data">
          <label>Type:
            <select [(ngModel)]="name.type">
              <option *ngFor="#type of getAllNameTypes()">{{type}}</option>
            </select>
          </label>
          <name-forms [data]="name.nameForms"></name-forms>
        </div>
      </fieldset>
    </div>
    `,
    styles: [``],
    inputs:['data'],
    directives:[NameFormsComponent]
})
export class NamesComponent implements OnInit {
    public data: Array<Name>;
    constructor() { }
    ngOnInit() { }
    getAllNameTypes() {
        return NAME_TYPE.ALL;
    }
    addName(){
      if(this.data==undefined){
        this.data = new Array<Name>();
      }
      var name:Name={nameForms:new Array<NameForm>({})};
      this.data.push(name);
    }
}
