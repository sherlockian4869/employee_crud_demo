import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { CoreService } from '../../shared/core/core.service';
import { ItemAddEditComponent } from '../item-add-edit/item-add-edit.component';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent {
  displayedColumns: string[] = [
    'id',
    'itemName',
    'category',
    'description',
    'purchaseDate',
    'price',
    'quantity',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _itemService: ItemService,
    private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.getItemList();
  }

  openAddItemFormDialog() {
    const dialogRef = this._dialog.open(ItemAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (res: any) => {
        if (res) {
          this.getItemList();
        }
      },
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(ItemAddEditComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (res: any) => {
        if (res) {
          this.getItemList();
        }
      },
    });
  }

  getItemList() {
    this._itemService.getItemList().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteItem(empId: number) {
    this._itemService.deleteItem(empId).subscribe({
      next: (res: any) => {
        this._coreService.openSnackBar('Item deleted successfully');
        this.getItemList();
      },
      error: console.log,
    });
  }
}
