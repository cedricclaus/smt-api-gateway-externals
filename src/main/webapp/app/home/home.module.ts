import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SmtApiGatewayExternalsSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [SmtApiGatewayExternalsSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class SmtApiGatewayExternalsHomeModule {}
