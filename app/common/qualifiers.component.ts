import {Component, OnInit,Input} from 'angular2/core';
import {Qualifier} from 'gedcomx';

@Component({
    selector: 'qualifiers',
    template: `
    <div>
      <button (click)="addQualifier()">Add Qualifier</button>
      <fieldset *ngIf="data">
        <legend>Qualifiers</legend>
        <div *ngFor="#qualifier of data">
          <label>
            qualifier name: <input [(ngModel)]="qualifier.name" placeholder="qualifier-name"/>
          </label>
          <label>
            qualifier value: <input [(ngModel)]="qualifier.value" placeholder="qualifier-value"/>
          </label>
        </div>
      </fieldset>
    </div>
    `,
    styles: [``],
    inputs:['data']
})
export class QualifiersComponent implements OnInit {
    public data: Array<Qualifier>;
    constructor() { }
    ngOnInit() { }
}
