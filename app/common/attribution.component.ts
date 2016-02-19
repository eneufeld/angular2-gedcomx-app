import {Component, OnInit,Input} from 'angular2/core';
import {Attribution} from 'gedcomx';
import {ResourceReferenceComponent} from './resource-reference.component';
import {CollapsibleFieldsetComponent} from './collapsibleFieldset.component';

@Component({
    selector: 'attribution',
    template: `
    <collapsibleFieldset legendLabel="Attribution">
      <button (click)="createAttribution()" *ngIf="!data">Set Attribution</button>
      <div *ngIf="data">
        <resourceReference [data]=data.contributor></resourceReference>
        <label>
          Modified: <input [(ngModel)]="data.modified" placeholder="Modified" type="number"/>
        </label>
        <label>
          Change Message: <input [(ngModel)]="data.changeMessage" placeholder="Change Message"/>
        </label>
      </div>
    </collapsibleFieldset>
    `,
    directives:[ResourceReferenceComponent,CollapsibleFieldsetComponent],
    inputs:['data']
})
export class AttributionComponent implements OnInit {
    data: Attribution;
    constructor() { }
    ngOnInit() { }
}
