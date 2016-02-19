import {Component, OnInit,Input} from 'angular2/core';
import {Conclusion} from 'gedcomx';
import {SourceReferenceComponent} from './source-reference.component';
import {ResourceReferenceComponent} from './resource-reference.component';
import {CollapsibleFieldsetComponent} from './collapsibleFieldset.component';

@Component({
    selector: 'conclusion',
    template: `
    <collapsibleFieldset legendLabel="Conclusion" [hidden]="true">
      <label>
        ID: <input [(ngModel)]="data.id" placeholder="ID"/>
      </label>
      <label>
        Language Code: <input [(ngModel)]="data.lang" placeholder="Conclusion language code"/>
      </label>
      <collapsibleFieldset legendLabel="Sources">
        <button (click)="addSource()">Add Source</button>
        <div *ngFor="#source of data.sources">
          <sourceReference [data]="source"></sourceReference>
        </div>
      </collapsibleFieldset>
      <resourceReference [data]=data.analysis></resourceReference>
    </collapsibleFieldset>
    `,
    directives:[SourceReferenceComponent,ResourceReferenceComponent,CollapsibleFieldsetComponent],
    inputs:['data']
})
export class ConclusionComponent implements OnInit {
    data: Conclusion;
    constructor() { }
    ngOnInit() { }
}
