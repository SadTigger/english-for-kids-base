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



const MaterialComponents = [MatSlideToggleModule, MatIconModule, MatSidenavModule, MatTableModule, CdkTableModule, MatSortModule, MatButtonModule];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
