import { NgModule } from '@angular/core';
import { DxBulletModule, DxMenuModule, DxTemplateModule, DxDataGridModule, DxPopupModule, DxListModule } from 'devextreme-angular';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    DxMenuModule,
    DxDataGridModule,
    DxBulletModule,
    DxTemplateModule,
    DxPopupModule,
    DxListModule
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
