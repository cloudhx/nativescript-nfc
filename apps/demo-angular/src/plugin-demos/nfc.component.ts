import { Component, NgZone } from '@angular/core';
import { DemoSharedNfc } from '@demo/shared';
import { } from '@nativescript/nfc';

@Component({
	selector: 'demo-nfc',
	templateUrl: 'nfc.component.html',
})
export class NfcComponent {
  
  demoShared: DemoSharedNfc;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNfc();
  }

}