import {Component, OnInit,Input} from 'angular2/core';
import {Conclusion} from 'gedcomx';

@Component({
    selector: 'conclusion',
    template: `
    <fieldset>
      <legend>Conclusion</legend>
      <label>
        ID: <input [(ngModel)]="data.id" placeholder="ID"/>
      </label>
      <label>
        Language Code: <input [(ngModel)]="data.lang" placeholder="Conclusion language code"/>
      </label>
    </fieldset>
    `,
    inputs:['data']
})
export class ConclusionComponent implements OnInit {
    public data: Conclusion;
    constructor() { }
    ngOnInit() { }
}
