import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableDataPageRoutingModule } from './table-data-routing.module';

import { TableDataPage } from './table-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableDataPageRoutingModule
  ],
  declarations: [TableDataPage]
})
export class TableDataPageModule {}
