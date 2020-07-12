import { APISource } from './backend-models/api-source';

export class ServiceNotificationModel{
    constructor(public isCompleted : boolean,public source : APISource, public result: any){}
}