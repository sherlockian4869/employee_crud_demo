import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '../shared/material/material.module';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item.component';
import { ItemService } from './services/item.service';

const routes: Routes = [];

@NgModule({
  declarations: [ItemListComponent, ItemComponent],
  imports: [RouterModule.forChild(routes), CommonModule, MaterialModule],
  providers: [ItemService],
  bootstrap: [],
})
export class ItemModule {}
