import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { WrapTranslateComponent } from './components/wrap-translate/wrap-translate.component';

const WRAP_DECLARE = [WrapTranslateComponent];
const EXPORTS = [
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,

];
@NgModule({
  declarations: [...WRAP_DECLARE],
  imports: [
    CommonModule,
    ...EXPORTS
  ],
  exports: [
    ...EXPORTS,
    ...WRAP_DECLARE,
  ]
})
export class SharedModule { }
