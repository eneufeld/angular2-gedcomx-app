import {Component, OnInit,Input} from 'angular2/core';
import {Subject} from 'gedcomx';
import {ConclusionComponent} from './conclusion.component';
import {EvidenceComponent} from './evidence.component';
import {SourceReferenceComponent} from './source-reference.component';
import {IdentifierComponent} from './identifier.component';
import {AttributionComponent} from './attribution.component';
import {CollapsibleFieldsetComponent} from './collapsibleFieldset.component';

@Component({
    selector: 'subject',
    template: `
    <collapsibleFieldset legendLabel="Subject" [hidden]="true">
      <label>
        Extracted: <input [(ngModel)]="data.extracted" type="checkbox"/>
      </label>
      <conclusion [data]=data></conclusion>
      <collapsibleFieldset legendLabel="Evidence">
        <button (click)="addEvidence()">Add Evidence</button>
        <div *ngFor="#evidence of data.evidence">
          <evidence [data]="evidence"></evidence>
        </div>
      </collapsibleFieldset>
      <collapsibleFieldset legendLabel="Media">
        <button (click)="addMedia()">Add Media</button>
        <div *ngFor="#media of data.media">
          <sourceReference [data]="media"></sourceReference>
        </div>
      </collapsibleFieldset>
      <collapsibleFieldset legendLabel="Identifiers">
        <button (click)="addIdentifier()">Add Identifier</button>
        <div *ngFor="#identifier of data.identifiers">
          <identifier [data]="identifier"></identifier>
        </div>
      </collapsibleFieldset>
      <attribution [data]=data.attribution></attribution>
    </collapsibleFieldset>
    `,
    directives:[ConclusionComponent,EvidenceComponent,SourceReferenceComponent,IdentifierComponent,AttributionComponent,CollapsibleFieldsetComponent],
    inputs:['data']
})
export class SubjectComponent implements OnInit {
    data: Subject;
    constructor() { }
    ngOnInit() { }
}
