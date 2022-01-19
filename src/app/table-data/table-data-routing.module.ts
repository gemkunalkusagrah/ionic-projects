import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableDataPage } from './table-data.page';

const routes: Routes = [
  {
    path: '',
    component: TableDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableDataPageRoutingModule {}
