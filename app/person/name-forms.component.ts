import {Component, OnInit,Input} from 'angular2/core';
import {NameForm} from 'gedcomx';
import {NamePartsComponent} from './name-parts.component';

@Component({
    selector: 'name-forms',
    template: `
    <div>
      <button (click)="addNameForm()">Add NameForm</button>
      <fieldset *ngIf="data">
        <legend>NameForms</legend>
        <div *ngFor="#nameForm of data">
          <label>
            Language Code: <input [(ngModel)]="nameForm.lang" placeholder="Name form language code"/>
          </label>
          <label>
            Full Text: <input [(ngModel)]="nameForm.fullText" placeholder="nameForm"/>
          </label>
          <name-parts [data]="nameForm.parts" class="entry"></name-parts>
        </div>
      </fieldset>
    </div>
    `,
    styles: [``],
    inputs:['data'],
    directives:[NamePartsComponent]
})
export class NameFormsComponent implements OnInit {
    public data: Array<NameForm>;
    constructor() { }
    ngOnInit() { }

}
