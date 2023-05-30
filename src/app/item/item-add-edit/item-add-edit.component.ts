import { CoreService } from 'src/app/shared/core/core.service';

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-add-edit',
  templateUrl: './item-add-edit.component.html',
  styleUrls: ['./item-add-edit.component.scss'],
})
export class ItemAddEditComponent implements OnInit {
  itemForm: FormGroup;
  categories: string[] = ['Clothes', 'Food', 'Architecture'];

  constructor(
    private _fb: FormBuilder,
    private _itemService: ItemService,
    private _dialogRef: MatDialogRef<ItemAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.itemForm = this._fb.group({
      itemName: '',
      category: '',
      description: '',
      purchaseDate: '',
      price: '',
      quantity: '',
    });
  }

  ngOnInit(): void {
    this.itemForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.itemForm.valid) {
      if (this.data) {
        this._itemService
          .updateItem(this.data.id, this.itemForm.value)
          .subscribe({
            next: (res: any) => {
              this._coreService.openSnackBar('Item detail updated');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.log(err);
            },
          });
      } else {
        this._itemService.addItem(this.itemForm.value).subscribe({
          next: (res: any) => {
            this._coreService.openSnackBar('Item added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(err);
          },
        });
      }
    }
  }
}
