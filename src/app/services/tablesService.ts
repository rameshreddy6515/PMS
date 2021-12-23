import { Injectable } from '@angular/core';
import { Observable, of, timeInterval } from 'rxjs';
import { AppointmentDetails } from '../models/AppointmentDetail';
import { Customer } from '../models/Customer';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class TablesService {
  // public loadAppointmentData(): AppointmentDetails[] {
  //   return [
  //     {
  //       id:1,
  //       meetingTitle: 'Shweta S',
  //       description: 'Example Inc.',
  //       physician: 'Yonkers',
  //       date: new Date('4-Dec-2021'),
  //       time: 'new TimeRanges()',
  //       editHistory: 'allergiea',
  //     },
  //     {
  //       id:2,
  //       meetingTitle: 'Joe James',
  //       description: 'Example Inc.',
  //       physician: 'Yonkers',
  //       date: new Date('3-Dec-2021'),
  //       time: 'new TimeRanges()',
  //       editHistory: 'allergiea',
  //     },
  //     {
  //       id:3,
  //       meetingTitle: 'Joe James',
  //       description: 'Example Inc.',
  //       physician: 'Yonkers',
  //       date: new Date('2-Dec-2021'),
  //       time: 'new TimeRanges()',
  //       editHistory: 'allergiea',
  //     },
  //   ];
  // }
}
