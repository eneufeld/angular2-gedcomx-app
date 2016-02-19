import {Component, OnInit,Input} from 'angular2/core';
import {Qualifier} from 'gedcomx';
import {CollapsibleFieldsetComponent} from './collapsibleFieldset.component';

@Component({
    selector: 'qualifier',
    template: `
    <collapsibleFieldset legendLabel="Qualifier">
      <button (click)="createQualifier()" *ngIf="!data">Create Qualifier</button>
      <div *ngIf="data">
        <label>
          qualifier name: <input [(ngModel)]="data.name" placeholder="qualifier-name"/>
        </label>
        <label>
          qualifier value: <input [(ngModel)]="data.value" placeholder="qualifier-value"/>
        </label>
      </div>
    </collapsibleFieldset>
    `,
    styles: [``],
    directives:[CollapsibleFieldsetComponent],
    inputs:['data']
})
export class QualifierComponent implements OnInit {
    public data: Qualifier;
    constructor() { }
    ngOnInit() { }
}
