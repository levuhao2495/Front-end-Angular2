import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { VlanComponent } from './vlan/vlan.component';
import { PortComponent } from './port/port.component';
import { routing } from './app.routing';
import { AdddeviceComponent } from './device/adddevice/adddevice.component';
import { EditdeviceComponent } from './device/editdevice/editdevice.component';
import { EditvlanComponent } from './vlan/editvlan/editvlan.component';
import { DeviceService} from './service/device.service';
import {enableProdMode} from '@angular/core';

enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    VlanComponent,
    PortComponent,
    AdddeviceComponent,
    EditdeviceComponent,
    EditvlanComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [DeviceService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
