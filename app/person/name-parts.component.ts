import {Component, OnInit,Input} from 'angular2/core';
import {NamePart} from 'gedcomx';
import {NAMEPART_TYPE} from '../gedcomx/gedcomx.constants';
import {QualifiersComponent} from '../common/qualifiers.component';

@Component({
    selector: 'name-parts',
    template: `
    <div>
      <button (click)="addNamePart()">Add NamePart</button>
      <fieldset *ngIf="data">
        <legend>NameParts</legend>
        <div *ngFor="#namePart of data">
          <label>NamePart Type:
            <select [(ngModel)]="namePart.type">
              <option *ngFor="#type of getAllNamePartTypes()">{{type}}</option>
            </select>
          </label>
          <label>NamePart Value:
            <input [(ngModel)]="namePart.value" placeholder="namePart-value"/>
          </label>
          <qualifiers [data]="namePart.qualifiers"></qualifiers>
        </div>
      </fieldset>
    </div>
    `,
    styles: [``],
    inputs:['data'],
    directives:[QualifiersComponent]
})
export class NamePartsComponent implements OnInit {
    public data: Array<NamePart>;
    constructor() { }
    ngOnInit() { }

    getAllNamePartTypes() {
        return NAMEPART_TYPE.ALL;
    }
}
