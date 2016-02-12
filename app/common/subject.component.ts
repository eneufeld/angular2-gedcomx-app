import {Component, OnInit,Input} from 'angular2/core';
import {Subject} from 'gedcomx';
import {ConclusionComponent} from './conclusion.component';

@Component({
    selector: 'subject',
    template: `
    <fieldset>
      <legend>Subject</legend>
      <label>
        Extracted: <input [(ngModel)]="data.extracted" type="checkbox"/>
      </label>
      <conclusion [data]=data></conclusion>
    </fieldset>
    `,
    inputs:['data'],
    directives:[ConclusionComponent]
})
export class SubjectComponent implements OnInit {
    public data: Subject;
    constructor() { }
    ngOnInit() { }
}
