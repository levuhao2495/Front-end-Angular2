import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../../service/device.service';
import {Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-adddevice',
  templateUrl: './adddevice.component.html',
  styleUrls: ['./adddevice.component.css']
})
export class AdddeviceComponent implements OnInit {

  modeldevice = { deviceid:0,
     ip:'',mac:'',name:'',type:'',
     version:'',snmpv:'',snmpr:'',snmpw:''};
  constructor(private _devicedata: DeviceService, private _router: Router) { }

  ngOnInit() {  
  }
  addDevice(){
    this._devicedata.addDevice(this.modeldevice).subscribe(
                (data:any)=>{
                    
                    console.log(data);
                    
                    this._router.navigate(['/allDevice']);
                
                },
                function(error){
                
                    console.log(error);
                
                },             
                function(){
                
                  console.log('complete');
            
                }
    );
  }

}
