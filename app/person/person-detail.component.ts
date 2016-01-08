import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Person} from 'gedcomx';
import {GedcomXService} from '../gedcomx/gedcomx.service';

@Component({
    selector: 'person-detail',
    template:`
    <div *ngIf="person">
    	<h2>{{person.names[0].nameForms[0].fullText}} details!</h2>
    	<div>
    		<label>id: </label>{{person.id}}
      </div>
      <h3>Names</h3>
    	<div *ngFor="#name of person.names">
    		<label>name type: </label>
    		<input [(ngModel)]="name.type" placeholder="name-type"/>

        <h4>NameForms</h4>
      	<div *ngFor="#nameForm of name.nameForms">
      		<label>nameForm: </label>
      		<input [(ngModel)]="nameForm.fullText" placeholder="nameForm"/>
          <label>nameForm lang: </label>
      		<input [(ngModel)]="nameForm.lang" placeholder="nameForm-lang"/>

          <h5>NameFormParts</h5>
        	<div *ngFor="#namePart of nameForm.parts">
        		<label>namePart type: </label>
        		<input [(ngModel)]="namePart.type" placeholder="namePart-type"/>
            <label>namePart value: </label>
        		<input [(ngModel)]="namePart.value" placeholder="namePart-value"/>

            <div *ngFor="#qualifier of namePart.qualifiers">
          		<label>qualifier name: </label>
          		<input [(ngModel)]="qualifier.name" placeholder="qualifier-name"/>
              <label>qualifier value: </label>
          		<input [(ngModel)]="qualifier.value" placeholder="qualifier-value"/>
          	</div>
            <hr>
        	</div>
          <hr>
      	</div>
        <hr>
    	</div>
    	<button (click)="goBack()">Back</button>
    </div>
    `,
    styles:[``],
  })
  export class PersonDetailComponent implements OnInit {
    public person: Person;

    constructor(private _gedcomXService: GedcomXService,
      private _routeParams: RouteParams) {
    }

    ngOnInit() {
      if (!this.person) {
        let id = this._routeParams.get('id');
        this._gedcomXService.getPerson(id).then(person => this.person = person);
      }
    }

    goBack() {
      window.history.back();
    }
  }
