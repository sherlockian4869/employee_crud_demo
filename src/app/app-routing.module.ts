import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpModule } from './emp/emp.module';

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), EmpModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
