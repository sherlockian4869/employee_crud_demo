import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, acriont: string = 'Ok') {
    this._snackBar.open(message, acriont, {
      duration: 5000,
      verticalPosition: 'top',
    });
  }
}
