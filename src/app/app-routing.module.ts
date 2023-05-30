import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpModule } from './emp/emp.module';
import { ItemComponent } from './item/item.component';
import { ItemModule } from './item/item.module';

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'items', component: ItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), EmpModule, ItemModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
