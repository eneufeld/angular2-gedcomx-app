import {Component, OnInit,Input} from 'angular2/core';
import {Fact} from 'gedcomx';
import {FACT_TYPE} from '../gedcomx/gedcomx.constants';

@Component({
    selector: 'facts',
    template: `
    <div>
      <button (click)="addFact()">Add Fact</button>
      <fieldset *ngIf="data">
        <legend>Facts</legend>
        <div *ngFor="#fact of data">
          <label>Type:
            <select [(ngModel)]="fact.type">
              <option *ngFor="#type of getAllFactTypes()">{{type}}</option>
            </select>
          </label>
        </div>
      </fieldset>
    </div>
    `,
    styles: [``],
    inputs:['data'],
    directives:[]
})
export class FactsComponent implements OnInit {
    public data: Array<Fact>;
    constructor() { }
    ngOnInit() { }
    getAllFactTypes() {
        return FACT_TYPE.ALL;
    }
}
