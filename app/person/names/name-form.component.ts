import {Component, OnInit,Input} from 'angular2/core';
import {NameForm,NamePart} from 'gedcomx';
import {NamePartComponent} from './name-part.component';
import {CollapsibleFieldsetComponent} from '../../common/collapsibleFieldset.component';

@Component({
    selector: 'name-form',
    template: `
    <collapsibleFieldset legendLabel="NameForm">
      <button (click)="createNameForm()" *ngIf="!data">Create Name Form</button>
      <div *ngIf="data">
        <label>
          Language Code: <input [(ngModel)]="data.lang" placeholder="Name form language code"/>
        </label>
        <label>
          Full Text: <input [(ngModel)]="data.fullText" placeholder="nameForm"/>
        </label>
        <collapsibleFieldset legendLabel="Name Parts">
          <button (click)="addNamePart()">Add Name Part</button>
          <div *ngFor="#namePart of data.parts">
            <name-part [data]="namePart" class="entry"></name-part>
          </div>
        </collapsibleFieldset>
      </div>
    </collapsibleFieldset>
    `,
    styles: [``],
    inputs:['data'],
    directives:[NamePartComponent,CollapsibleFieldsetComponent]
})
export class NameFormComponent implements OnInit {
    public data: NameForm;
    constructor() { }
    ngOnInit() { }

    addNamePart(){
      if(this.data.parts==undefined){
        this.data.parts = new Array<NamePart>();
      }
      var namePart:NamePart={value:""};
      this.data.parts.push(namePart);
    }
}
