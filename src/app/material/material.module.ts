import {NgModule} from '@angular/core';
import * as Material from '@angular/material';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,  //for grid column
    Material.MatFormFieldModule,  //form
    Material.MatInputModule,  //input
    Material.MatRadioModule,  //mat-radio-group - radio button
    Material.MatDatepickerModule,  //matDatepicker - datepicker
    Material.MatNativeDateModule,  //required for datepicker
    Material.MatSelectModule,  //mat-select - dropdown
    Material.MatCheckboxModule,  //mat-checkbox - checkbox
    Material.MatButtonModule,  //for button
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatButtonModule,
  ]
})
export class MaterialModule {
}
