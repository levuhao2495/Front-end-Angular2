import {Injectable} from '@angular/core';
import {Http,Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import { Device} from '../device/device';
import 'rxjs/add/operator/map';

@Injectable()
export class DeviceService{

    constructor(private _http:Http){}
    getAllDevices(){
        return this._http.get('/apidevice/device')
        .map((response: Response) =>response.json());

    }
    /*
    getDeviceID(id: any){
        return this._http.get('./device/device'+ id)
        .map((rp: Response) => rp.json());
    }
    */
    addDevice(item: Device){
        let body = JSON.stringify(item);
            
            let headers = new Headers({ 'Content-Type': 'application/json' });
            
            let options = new RequestOptions({ headers: headers });
            
            return this._http.post('/apidevice/device',body, options)
            
            .map((response:Response)=>response.json());
    }
    deleteDevice(deviceid){
        
    }

}