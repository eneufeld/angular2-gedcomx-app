import {Component, OnInit,Input} from 'angular2/core';
import {EvidenceReference} from 'gedcomx';
import {AttributionComponent} from './attribution.component';
import {CollapsibleFieldsetComponent} from './collapsibleFieldset.component';

@Component({
    selector: 'evidence',
    template: `
    <collapsibleFieldset legendLabel="Evidence">
      <label>
        Resource: <input [(ngModel)]="data.resource" placeholder="Resource"/>
      </label>
      <attribution [data]=data.attribution></attribution>
    </collapsibleFieldset>
    `,
    directives:[AttributionComponent,CollapsibleFieldsetComponent],
    inputs:['data']
})
export class EvidenceComponent implements OnInit {
    data: EvidenceReference;
    constructor() { }
    ngOnInit() { }
}
