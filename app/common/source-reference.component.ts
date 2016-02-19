import {Component, OnInit,Input} from 'angular2/core';
import {SourceReference} from 'gedcomx';
import {AttributionComponent} from './attribution.component';
import {CollapsibleFieldsetComponent} from './collapsibleFieldset.component';

@Component({
    selector: 'sourceReference',
    template: `
    <collapsibleFieldset legendLabel="Source Reference">
      <button (click)="createSourceReference()" *ngIf="!data">Set Source Reference</button>
      <label *ngIf="data">
        Description: <input [(ngModel)]="data.description" placeholder="Description"/>
      </label>
      <attribution [data]=data.attribution></attribution>
    </collapsibleFieldset>
    `,
    directives:[AttributionComponent,CollapsibleFieldsetComponent],
    inputs:['data']
})
export class SourceReferenceComponent implements OnInit {
    data: SourceReference;
    constructor() { }
    ngOnInit() { }
}
