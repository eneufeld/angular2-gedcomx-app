import {Component, OnInit,Input} from 'angular2/core';
import {NamePart,Qualifier} from 'gedcomx';
import {NAMEPART_TYPE} from '../../gedcomx/gedcomx.constants';
import {QualifierComponent} from '../../common/qualifier.component';
import {CollapsibleFieldsetComponent} from '../../common/collapsibleFieldset.component';

@Component({
    selector: 'name-part',
    template: `
    <collapsibleFieldset legendLabel="NamePart">
      <button (click)="createNameForm()" *ngIf="!data">Create Name Form</button>
      <div *ngIf="data">
        <label>NamePart Type:
          <select [(ngModel)]="data.type">
            <option *ngFor="#type of getAllNamePartTypes()">{{type}}</option>
          </select>
        </label>
        <label>NamePart Value:
          <input [(ngModel)]="data.value" placeholder="namePart-value"/>
        </label>
        <collapsibleFieldset legendLabel="Qualifiers">
          <button (click)="addQualifier()">Add Qualifier</button>
          <div *ngFor="#qualifier of data.qualifiers">
            <qualifier [data]="qualifier" class="entry"></qualifier>
          </div>
        </collapsibleFieldset>
      </div>
    </collapsibleFieldset>
    `,
    styles: [``],
    inputs:['data'],
    directives:[QualifierComponent,CollapsibleFieldsetComponent]
})
export class NamePartComponent implements OnInit {
    public data: NamePart;
    constructor() { }
    ngOnInit() { }

    getAllNamePartTypes() {
        return NAMEPART_TYPE.ALL;
    }
    addQualifier(){
      if(this.data.qualifiers==undefined){
        this.data.qualifiers = new Array<Qualifier>();
      }
      var qualifier:Qualifier={name:""};
      this.data.qualifiers.push(qualifier);
    }
}
