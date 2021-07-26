import { Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  public email: string = "";
  public password: string = "";

  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }

  cancel() {
    this.dialogRef.close();
  }

}
