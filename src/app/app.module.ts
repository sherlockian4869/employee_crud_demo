import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from '../common/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpAddEditComponent } from './emp/emp-add-edit/emp-add-edit.component';
import { MaterialModule } from './shared/material/material.module';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [AppComponent, EmpAddEditComponent, NavbarComponent, ItemListComponent, ItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
