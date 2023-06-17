import { FormBuilder, Validators } from '@angular/forms';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hidden = false;
  panelOpenState = false;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  events: string[] = [];
  opened: boolean = true;
  isExpanded: boolean=false;

  open() {
    // this.isExpanded = false;
    this.opened = true;
  }

  close() {
    // this.isExpanded = true;
    this.opened = false;
  }
  
}