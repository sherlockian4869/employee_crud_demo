import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '../shared/material/material.module';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpComponent } from './emp.component';
import { EmployeeService } from './services/employee.service';

const routes: Routes = [
  {
    path: 'employees',
    component: EmpListComponent,
  },
];

@NgModule({
  declarations: [EmpListComponent, EmpComponent],
  imports: [RouterModule.forChild(routes), CommonModule, MaterialModule],
  providers: [EmployeeService],
  bootstrap: [],
})
export class EmpModule {}
