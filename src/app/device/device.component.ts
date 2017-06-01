import { Component, OnInit } from '@angular/core';
import {Device} from './device';
import {DeviceService} from '../service/device.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  
  allDevices: Device[]=[];

  constructor(private _datadevice: DeviceService, private _router: Router) { }

  ngOnInit() {
    this._datadevice.getAllDevices().subscribe(
      (data: Device[]) => {
      this.allDevices =data;
    }
    );
  }

}
