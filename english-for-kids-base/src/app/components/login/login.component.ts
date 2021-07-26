import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public email = '';

  public password = '';

  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }

  cancel(): void {
    this.dialogRef.close();
  }
}
