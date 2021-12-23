import { Time } from '@angular/common';
import { Timestamp } from 'rxjs';

export interface AppointmentDetails {
  scheduleId: number;
  physicianId: number;
  patientId: number;
  meetingTitle: string;
  description: string;
  modificationReason: string;
  modificationType: string;
  firstName: string;
  lastName: string;
  appointmentDate: Date;
  appointmentTime: Time;
  modifiedDate: Date;
  modifiedTime: Time;
}
