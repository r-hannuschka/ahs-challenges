
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsComponent } from './components/reactive-forms.component';

@NgModule({
  imports: [
    RouterModule.forChild([
    {
      path: '',
      component: ReactiveFormsComponent,
    },
  ])],
  exports: [RouterModule]
})
export class ReactiveFormsRoutingModule {}
