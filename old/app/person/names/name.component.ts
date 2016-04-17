import {Component, OnInit,Input} from 'angular2/core';
import {Name,NameForm} from 'gedcomx';
import {NAME_TYPE} from '../../gedcomx/gedcomx.constants';
import {NameFormComponent} from './name-form.component';
import {CollapsibleFieldsetComponent} from '../../common/collapsibleFieldset.component';

@Component({
    selector: 'name',
    template: `
    <collapsibleFieldset legendLabel="Name">
      <button (click)="createName()" *ngIf="!data">Set Name</button>
      <div *ngIf="data">
        <label>Type:
          <select [(ngModel)]="data.type">
            <option *ngFor="#type of getAllNameTypes()">{{type}}</option>
          </select>
        </label>
        <collapsibleFieldset legendLabel="Name Forms">
          <button (click)="addNameForm()">Add Name Form</button>
          <div *ngFor="#nameForm of data.nameForms">
            <name-form [data]="nameForm"></name-form>
          </div>
        </collapsibleFieldset>
      </div>
    </collapsibleFieldset>
    `,
    styles: [``],
    inputs:['data'],
    directives:[NameFormComponent,CollapsibleFieldsetComponent]
})
export class NameComponent implements OnInit {
    public data: Name;
    constructor() { }
    ngOnInit() { }
    getAllNameTypes() {
        return NAME_TYPE.ALL;
    }
    addNameForm(){
      if(this.data==undefined){
        this.data.nameForms = new Array<NameForm>();
      }
      var nameForm:NameForm={};
      this.data.nameForms.push(nameForm);
    }
}
