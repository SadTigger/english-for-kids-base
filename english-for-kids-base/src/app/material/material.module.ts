import { NgModule } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
// used https://material.angular.io/components/table/overview
import { MatTableModule } from '@angular/material/table';
// used  https://material.angular.io/components/table/overview
import { CdkTableModule } from '@angular/cdk/table';
// used https://material.angular.io/components/sort/overview
import {MatSortModule} from '@angular/material/sort';
// used https://material.angular.io/components/button/overview
import {MatButtonModule} from '@angular/material/button';
// https://www.techiediaries.com/angular-material-login-form-modal-dialog/
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule } from '@angular/material/dialog';


const MaterialComponents = [
  MatSlideToggleModule,
  MatIconModule,
  MatSidenavModule,
  MatTableModule,
  CdkTableModule,
  MatSortModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatFormFieldModule,
  MatDialogModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
