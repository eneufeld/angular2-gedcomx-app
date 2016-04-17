import {Component, OnInit,Input} from 'angular2/core';
import {ResourceReference} from 'gedcomx';
import {CollapsibleFieldsetComponent} from './collapsibleFieldset.component';

@Component({
    selector: 'resourceReference',
    template: `
    <collapsibleFieldset legendLabel="Resource Reference">
      <button (click)="createResourceReference()" *ngIf="!data">Set Resource Reference</button>
      <label *ngIf="data">
        Resource: <input [(ngModel)]="data.resource" placeholder="Resource"/>
      </label>
    </collapsibleFieldset>
    `,
    inputs:['data'],
    directives:[CollapsibleFieldsetComponent]
})
export class ResourceReferenceComponent implements OnInit {
    data: ResourceReference;
    constructor() { }
    ngOnInit() { }
}
