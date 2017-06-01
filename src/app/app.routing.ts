import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {DeviceComponent} from './device/device.component';
import {VlanComponent} from './vlan/vlan.component';
import {PortComponent} from './port/port.component';
import {AdddeviceComponent} from './device/adddevice/adddevice.component';
import {EditdeviceComponent} from './device/editdevice/editdevice.component';


const appRouters: Routes = [
    {   path:'', redirectTo:'/home',pathMatch:'full' },
  
    {   path:'allDevice', component : DeviceComponent},
    {   path: 'allVlan', component : VlanComponent },
    {   path: 'allPort', component : PortComponent},
    {   path: 'addDevice', component: AdddeviceComponent },
    {   path: 'editDevice', component: EditdeviceComponent}


];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);