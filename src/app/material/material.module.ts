// This module's main concern is importing and exporting all our material components
import { NgModule } from '@angular/core';

  // These are the material imports
import { MatButtonModule, MatDatepickerInput } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';






// Add all the imports to the constant, then implemnt them to the import and export
const MaterialComponents = [
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})

export class MaterialModule { }
