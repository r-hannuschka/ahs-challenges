import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './components/reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsRoutingModule } from './reactive-forms.routing-module';
import { PersonenFormGroupComponent } from './components/personen-form-group.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ReactiveFormsRoutingModule],
  declarations: [ReactiveFormsComponent, PersonenFormGroupComponent],
})
export class ReactiveFormsPageModule { }
