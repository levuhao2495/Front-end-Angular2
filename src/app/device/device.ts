export class Device {
    constructor(
        public deviceid:number, 
        public ip: String,
        public mac: String,
        public name: String,
        public type: String,
        public snmpv: String,
        public snmpr: String,
        public snmpw: String
    ){   
    }
}