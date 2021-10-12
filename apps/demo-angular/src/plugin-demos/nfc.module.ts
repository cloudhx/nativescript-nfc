import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NfcComponent } from './nfc.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NfcComponent }])],
  declarations: [NfcComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NfcModule {}
