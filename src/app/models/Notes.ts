import { Time } from '@angular/common';
import { Timestamp } from 'rxjs';

export class Notes {
  constructor(
    public message: string,
    public receiverName: string,
    public receiverType: string,
    public senderName: string,
    public senderType: string,
    public response: string,
    public urgencyLevel: string,
    public date: Date,
    public time: String,
    public status: String,
    public id?: number
  ) {}
}
