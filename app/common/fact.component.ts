import {Component, OnInit,Input} from 'angular2/core';
import {Fact} from 'gedcomx';
import {FACT_TYPE} from '../gedcomx/gedcomx.constants';
import {CollapsibleFieldsetComponent} from './collapsibleFieldset.component';

@Component({
    selector: 'fact',
    template: `
    <collapsibleFieldset legendLabel="Fact">
      <button (click)="createFact()" *ngIf="!data">Set Fact</button>
      <div *ngIf="data">
        <label>Type:
          <select [(ngModel)]="data.type">
            <option *ngFor="#type of getAllFactTypes()">{{type}}</option>
          </select>
        </label>
      </div>
    </collapsibleFieldset>
    `,
    styles: [``],
    inputs:['data'],
    directives:[CollapsibleFieldsetComponent]
})
export class FactComponent implements OnInit {
    public data: Fact;
    constructor() { }
    ngOnInit() { }
    getAllFactTypes() {
        return FACT_TYPE.ALL;
    }
}
